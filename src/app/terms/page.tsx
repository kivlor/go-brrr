import {
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  Mail,
  Calendar,
  Users,
  CreditCard,
  Gavel,
  Globe,
  Lock,
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

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-16 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Scale className="w-3 h-3 mr-1" />
              Terms of Service
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Terms of
              <span className="text-primary"> Service</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              These terms govern your use of Go Brrr{"'"}s services. Please read
              them carefully before using our platform.
            </p>

            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Last Updated: December 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Effective Date: January 1, 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Key Points
                </CardTitle>
                <CardDescription>
                  Here are the most important things to know about our terms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">
                          You must be 18+ to use our service
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Or have parental consent if under 18
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CreditCard className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">
                          Billing is automatic and recurring
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Cancel anytime before next billing cycle
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">
                          You own your code and content
                        </p>
                        <p className="text-sm text-muted-foreground">
                          We only access what{"'"}s necessary to provide service
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">
                          We provide service {`"as is"`}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          With industry-standard uptime guarantees
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
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
                <CardDescription>
                  By accessing or using Go Brrr, you agree to be bound by these
                  Terms of Service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  These Terms of Service ({`"Terms"`}) govern your use of Go
                  Brrr
                  {"'"}s website, services, and applications (collectively, the
                  {`"Service"`}) operated by Go Brrr, Inc. (
                  {`"we," "us," or "our"`}).
                </p>
                <p className="text-muted-foreground mb-4">
                  By accessing or using our Service, you agree to be bound by
                  these Terms. If you disagree with any part of these terms,
                  then you may not access the Service.
                </p>
                <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-800 dark:text-amber-200">
                        Important
                      </p>
                      <p className="text-amber-700 dark:text-amber-300 text-sm">
                        These terms include important information about future
                        changes to the terms, limitations of liability, a class
                        action waiver, and resolution of disputes by
                        arbitration.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Terms */}
            <Card>
              <CardHeader>
                <CardTitle>2. Account Terms</CardTitle>
                <CardDescription>
                  Requirements and responsibilities for your Go Brrr account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Account Creation</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      You must be at least 18 years old to create an account
                    </li>
                    <li>
                      If you are under 18, you must have your parent or legal
                      guardian{"'"}s permission
                    </li>
                    <li>
                      You must provide accurate and complete information when
                      creating your account
                    </li>
                    <li>
                      You are responsible for maintaining the security of your
                      account and password
                    </li>
                    <li>
                      You must notify us immediately of any unauthorized use of
                      your account
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">
                    Account Responsibilities
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      You are responsible for all activities that occur under
                      your account
                    </li>
                    <li>
                      You must not share your account credentials with others
                    </li>
                    <li>You must keep your contact information up to date</li>
                    <li>
                      You must comply with all applicable laws and regulations
                    </li>
                    <li>
                      You must not use the service for any illegal or
                      unauthorized purpose
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card>
              <CardHeader>
                <CardTitle>3. Acceptable Use Policy</CardTitle>
                <CardDescription>
                  Guidelines for appropriate use of our services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Permitted Uses</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Deploy and host web applications and websites</li>
                    <li>Use our APIs and development tools</li>
                    <li>Collaborate with team members on projects</li>
                    <li>Access analytics and monitoring features</li>
                    <li>Integrate with third-party services and tools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Prohibited Uses</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Distribute malware, viruses, or harmful code</li>
                    <li>Engage in spamming or phishing</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the service to harm minors</li>
                    <li>Distribute pornographic or offensive content</li>
                    <li>
                      Engage in cryptocurrency mining without explicit
                      permission
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800 dark:text-red-200">
                        Enforcement
                      </p>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        Violation of these terms may result in suspension or
                        termination of your account and legal action.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
                <CardDescription>
                  Billing, pricing, and payment information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Billing</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      Paid plans are billed in advance on a monthly or annual
                      basis
                    </li>
                    <li>
                      Billing cycles begin on the date you upgrade to a paid
                      plan
                    </li>
                    <li>
                      All fees are non-refundable except as required by law
                    </li>
                    <li>We may change our pricing with 30 days{"'"} notice</li>
                    <li>Taxes may apply based on your location</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Payment Methods</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>We accept major credit cards and PayPal</li>
                    <li>Enterprise customers may pay by invoice</li>
                    <li>
                      Payment information is processed securely by our payment
                      processors
                    </li>
                    <li>
                      You authorize us to charge your payment method for all
                      fees
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Cancellation</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>You may cancel your subscription at any time</li>
                    <li>
                      Cancellation takes effect at the end of your current
                      billing period
                    </li>
                    <li>
                      You will retain access to paid features until the end of
                      your billing period
                    </li>
                    <li>No refunds are provided for partial billing periods</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property</CardTitle>
                <CardDescription>
                  Rights and ownership of content and code.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Your Content</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      You retain all rights to your code, content, and data
                    </li>
                    <li>
                      You grant us a limited license to host and serve your
                      content
                    </li>
                    <li>
                      You are responsible for ensuring you have rights to all
                      content you upload
                    </li>
                    <li>
                      You must not upload content that infringes on others{"'"}
                      intellectual property
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Our Content</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      Go Brrr and our logos are trademarks of Go Brrr, Inc.
                    </li>
                    <li>
                      Our platform, documentation, and APIs are protected by
                      copyright
                    </li>
                    <li>
                      You may not copy, modify, or distribute our proprietary
                      content
                    </li>
                    <li>
                      You may use our APIs and SDKs according to their
                      respective licenses
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card>
              <CardHeader>
                <CardTitle>6. Privacy and Data Protection</CardTitle>
                <CardDescription>
                  How we handle your personal information and data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Your privacy is important to us. Our Privacy Policy explains
                  how we collect, use, and protect your information when you use
                  our Service.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    We process your data in accordance with our Privacy Policy
                  </li>
                  <li>You can export your data at any time</li>
                  <li>
                    We implement appropriate security measures to protect your
                    data
                  </li>
                  <li>
                    We comply with applicable data protection laws (GDPR, CCPA,
                    etc.)
                  </li>
                  <li>
                    We do not sell your personal information to third parties
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" asChild>
                    <Link href="/privacy">Read Our Privacy Policy</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card>
              <CardHeader>
                <CardTitle>7. Service Availability</CardTitle>
                <CardDescription>
                  Our commitments regarding service uptime and availability.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Uptime Commitment</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>We strive to maintain 99.9% uptime for our service</li>
                    <li>Planned maintenance will be announced in advance</li>
                    <li>Emergency maintenance may occur without notice</li>
                    <li>SLA credits may apply for enterprise customers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Service Modifications</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>We may modify or discontinue features with notice</li>
                    <li>We may add new features or services at any time</li>
                    <li>
                      Deprecated features will have appropriate migration paths
                    </li>
                    <li>
                      We will provide reasonable notice for significant changes
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle>8. Disclaimers and Limitations</CardTitle>
                <CardDescription>
                  Important legal disclaimers about our service.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Service Disclaimer</h4>
                  <p className="text-muted-foreground mb-4">
                    THE SERVICE IS PROVIDED {`"AS IS"`} AND {`"AS AVAILABLE"`}{" "}
                    WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                    INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                    A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">
                    Limitation of Liability
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, GO BRRR SHALL NOT BE
                    LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR
                    CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, DATA, OR
                    BUSINESS OPPORTUNITIES.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Enterprise Customers
                  </p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Enterprise customers may have different terms and SLAs as
                    specified in their separate agreements.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
                <CardDescription>
                  How accounts can be terminated and what happens to your data.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Termination by You</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>You may terminate your account at any time</li>
                    <li>Termination takes effect immediately</li>
                    <li>You can export your data before termination</li>
                    <li>Some data may be retained as required by law</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Termination by Us</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      We may terminate accounts for violations of these terms
                    </li>
                    <li>We may terminate accounts for non-payment</li>
                    <li>We will provide reasonable notice when possible</li>
                    <li>You will have opportunity to export your data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Effect of Termination</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      Your access to the service will be immediately suspended
                    </li>
                    <li>
                      Your data will be deleted according to our data retention
                      policy
                    </li>
                    <li>Accrued fees remain due and payable</li>
                    <li>
                      Certain provisions of these terms will survive termination
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardHeader>
                <CardTitle>10. Dispute Resolution</CardTitle>
                <CardDescription>
                  How legal disputes are handled.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">Informal Resolution</h4>
                  <p className="text-muted-foreground mb-4">
                    We encourage you to contact us first to resolve any
                    disputes. Most concerns can be resolved quickly through our
                    support team.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Binding Arbitration</h4>
                  <p className="text-muted-foreground mb-4">
                    Any disputes that cannot be resolved informally will be
                    resolved through binding arbitration in accordance with the
                    rules of the American Arbitration Association.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Governing Law</h4>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of the State of
                    California, United States, without regard to conflict of law
                    principles.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
                <CardDescription>
                  How we handle updates to these terms of service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these terms at any time. When
                  we make changes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>We will update the {`"Last Updated"`} date</li>
                  <li>
                    We will notify you of significant changes via email or
                    platform notification
                  </li>
                  <li>Changes become effective immediately upon posting</li>
                  <li>
                    Your continued use of the service constitutes acceptance of
                    the changes
                  </li>
                  <li>
                    If you disagree with changes, you may terminate your account
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>12. Contact Information</CardTitle>
                <CardDescription>
                  How to reach us with questions about these terms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold">Legal Team</p>
                          <p className="text-muted-foreground">
                            legal@gobrrr.dev
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Gavel className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold">General Counsel</p>
                          <p className="text-muted-foreground">
                            counsel@gobrrr.dev
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Business Address</p>
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
                    <Link href="/contact">Contact Our Legal Team</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
