import {
  ChangeEmailCard,
  ChangePasswordCard,
  DeleteAccountCard,
} from "@daveyplate/better-auth-ui";

import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="grow">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-8">
                <ChangeEmailCard />
                <DeleteAccountCard />
              </TabsContent>
              <TabsContent value="password">
                <ChangePasswordCard />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
