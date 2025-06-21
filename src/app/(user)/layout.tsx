export default function AnonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container mx-auto">{children}</main>;
}
