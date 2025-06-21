// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "go-brrr",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("GoBrrrVpc");
    const database = new sst.aws.Postgres("GoBrrrDatabase", {
      vpc,
      dev: {
        username: "postgres",
        password: "password",
        database: "local",
        port: 5432,
      },
    });

    new sst.aws.Nextjs("GoBrrrWeb", { link: [database], vpc });

    if (!$dev) {
      new sst.aws.Function("GoBrrrMigrator", {
        handler: "src/db/migrator.handler",
        link: [database],
        vpc: vpc,
        copyFiles: [
          {
            from: "drizzle",
            to: "./migrations",
          },
        ],
      });
    }

    new sst.x.DevCommand("Studio", {
      link: [database],
      dev: {
        command: "npx drizzle-kit studio",
      },
    });
  },
});
