import { AuthCard } from "@daveyplate/better-auth-ui";

import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";

export default async function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto">
            <AuthCard view="SIGN_IN" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
