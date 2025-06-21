import {
  Shield,
  Eye,
  Lock,
  Users,
  Database,
  Globe,
  Mail,
  Calendar,
  FileText,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/app/header";
import { Footer } from "@/components/app/footer";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-3 h-3 mr-1" />
              Privacy Policy
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Your Privacy
              <span className="text-primary"> Matters</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We{"'"}re committed to protecting your privacy and being
              transparent about how we collect, use, and protect your
              information.
            </p>

            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Last Updated: December 15, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Privacy at a Glance
                </CardTitle>
                <CardDescription>
                  Here{"'"}s what you need to know about how we handle your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">We encrypt everything</p>
                        <p className="text-sm text-muted-foreground">
                          All data is encrypted in transit and at rest
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">
                          We don{"'"}t sell your data
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Your information is never sold to third parties
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">You control your data</p>
                        <p className="text-sm text-muted-foreground">
                          Request, export, or delete your data anytime
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">GDPR & CCPA compliant</p>
                        <p className="text-sm text-muted-foreground">
                          We follow international privacy standards
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
                <CardDescription>
                  We collect information you provide directly and automatically
                  when you use our services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">
                    Information You Provide
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      Account registration information (name, email, password)
                    </li>
                    <li>Profile information and preferences</li>
                    <li>Payment and billing information</li>
                    <li>
                      Content you create, upload, or share through our platform
                    </li>
                    <li>Communications with our support team</li>
                    <li>Feedback, surveys, and other voluntary submissions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">
                    Information We Collect Automatically
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      Usage data and analytics (pages visited, features used,
                      time spent)
                    </li>
                    <li>
                      Device information (IP address, browser type, operating
                      system)
                    </li>
                    <li>Log data (access times, pages requested, errors)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Performance and diagnostic information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
                <CardDescription>
                  We use your information to provide, improve, and protect our
                  services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>Service Provision:</strong> To operate and maintain
                    Go Brrr platform
                  </li>
                  <li>
                    <strong>Account Management:</strong> To create, manage, and
                    authenticate your account
                  </li>
                  <li>
                    <strong>Communication:</strong> To send important updates,
                    security alerts, and support messages
                  </li>
                  <li>
                    <strong>Improvement:</strong> To analyze usage patterns and
                    improve our platform
                  </li>
                  <li>
                    <strong>Security:</strong> To protect against fraud, abuse,
                    and security threats
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable
                    laws and regulations
                  </li>
                  <li>
                    <strong>Marketing:</strong> To send promotional
                    communications (with your consent)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>3. How We Share Your Information</CardTitle>
                <CardDescription>
                  We limit data sharing to essential business purposes and
                  trusted partners.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">
                    We may share information with:
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>Service Providers:</strong> Third-party vendors
                      who help us operate our platform
                    </li>
                    <li>
                      <strong>Business Partners:</strong> Trusted partners for
                      integrations and features
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law
                      or to protect our rights
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with
                      mergers, acquisitions, or asset sales
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> When you explicitly
                      authorize sharing
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    We Never:
                  </p>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>
                      Sell your personal information to advertisers or data
                      brokers
                    </li>
                    <li>
                      Share your code or proprietary information without
                      permission
                    </li>
                    <li>
                      Use your data for purposes unrelated to our services
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
                <CardDescription>
                  We implement industry-standard security measures to protect
                  your information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technical Safeguards</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>End-to-end encryption for data transmission</li>
                      <li>AES-256 encryption for data storage</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Multi-factor authentication support</li>
                      <li>Secure access controls and permissions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">
                      Operational Safeguards
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>Employee background checks and training</li>
                      <li>Limited access on a need-to-know basis</li>
                      <li>Regular backup and disaster recovery procedures</li>
                      <li>24/7 security monitoring and incident response</li>
                      <li>SOC 2 Type II compliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>5. Your Privacy Rights</CardTitle>
                <CardDescription>
                  You have control over your personal information and how it
                  {"'"}s used.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Access & Control</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>View and update your account information</li>
                      <li>Download your data in portable formats</li>
                      <li>Delete your account and associated data</li>
                      <li>Opt out of marketing communications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">
                      Additional Rights (GDPR/CCPA)
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>Request correction of inaccurate data</li>
                      <li>Object to processing for legitimate interests</li>
                      <li>Request restriction of processing</li>
                      <li>File complaints with supervisory authorities</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Exercise Your Rights
                  </p>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Contact us at{" "}
                    <Link
                      href="mailto:privacy@gobrrr.dev"
                      className="underline"
                    >
                      privacy@gobrrr.dev
                    </Link>{" "}
                    to exercise any of these rights. We{"'"}ll respond within 30
                    days.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking</CardTitle>
                <CardDescription>
                  We use cookies and similar technologies to enhance your
                  experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">
                    Types of Cookies We Use
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Essential Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Required for basic platform functionality and security
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Analytics Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how you use our platform to improve
                        it
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Preference Cookies</p>
                      <p className="text-sm text-muted-foreground">
                        Remember your settings and preferences
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  You can control cookie settings through your browser
                  preferences. Note that disabling certain cookies may affect
                  platform functionality.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle>7. Data Retention</CardTitle>
                <CardDescription>
                  We keep your information only as long as necessary.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>Account Data:</strong> Retained while your account
                    is active
                  </li>
                  <li>
                    <strong>Usage Logs:</strong> Typically retained for 90 days
                    for security and debugging
                  </li>
                  <li>
                    <strong>Billing Records:</strong> Kept for 7 years for tax
                    and legal compliance
                  </li>
                  <li>
                    <strong>Marketing Data:</strong> Deleted when you
                    unsubscribe or request deletion
                  </li>
                  <li>
                    <strong>Support Communications:</strong> Retained for 3
                    years for quality assurance
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-800 dark:text-amber-200">
                        Account Deletion
                      </p>
                      <p className="text-amber-700 dark:text-amber-300 text-sm">
                        When you delete your account, we remove your personal
                        data within 30 days. Some data may be retained longer
                        for legal or security purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <CardTitle>8. International Data Transfers</CardTitle>
                <CardDescription>
                  Information about how we handle data across borders.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Go Brrr operates globally, and your information may be
                  transferred to and processed in countries other than your own.
                  We ensure appropriate safeguards are in place:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Standard Contractual Clauses for EU data transfers</li>
                  <li>Adequacy decisions for approved countries</li>
                  <li>Strong encryption for all data in transit</li>
                  <li>Regular assessments of transfer mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>9. Contact Us</CardTitle>
                <CardDescription>
                  Questions about this privacy policy or your data? We{"'"}re
                  here to help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold">Privacy Team</p>
                          <p className="text-muted-foreground">
                            privacy@gobrrr.dev
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold">
                            Data Protection Officer
                          </p>
                          <p className="text-muted-foreground">
                            dpo@gobrrr.dev
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Mailing Address</p>
                      <p className="text-muted-foreground text-sm">
                        Go Brrr, Inc.
                        <br />
                        123 Developer Street
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">Contact Our Privacy Team</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
                <CardDescription>
                  How we handle updates to our privacy practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We may update this privacy policy from time to time to reflect
                  changes in our practices or applicable law. When we make
                  changes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    We{"'"}ll update the {`"Last Updated"`} date at the top of
                    this policy
                  </li>
                  <li>
                    For significant changes, we{"'"}ll notify you via email or
                    platform notification
                  </li>
                  <li>
                    We{"'"}ll maintain previous versions for your reference
                  </li>
                  <li>
                    Your continued use of our services constitutes acceptance of
                    the updated policy
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
