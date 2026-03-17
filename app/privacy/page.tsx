import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Read about how ${SITE_CONFIG.name} collects, uses, and protects your information.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SiteHeader />

      <main className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-8">
            Privacy <span className="text-accent underline decoration-accent/20">Policy</span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg font-bold text-foreground">Last Updated: March 14, 2024</p>
            
            <p>
              At The Home Versus, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website (the "Site").
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">1. Personal Information We Collect</h2>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">2. How Do We Use Your Personal Information?</h2>
            <p>
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">3. Sharing Your Personal Information</h2>
            <p>
              We do not sell your personal information to third parties. We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">4. Advertising and Affiliates</h2>
            <p>
              We may use third-party advertising networks to display advertisements after you visit our Site. These networks may use cookies to collect data about your visits in order to provide advertisements about goods and services of interest to you.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">5. Behavioral Advertising</h2>
            <p>
              As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">6. Your Rights</h2>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">7. Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <span className="text-accent font-bold">{SITE_CONFIG.contactEmail}</span>.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
