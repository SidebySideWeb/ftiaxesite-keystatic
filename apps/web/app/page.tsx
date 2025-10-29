import Hero from "@/components/hero"
import Features from "@/components/features"
import HowWeWork from "@/components/how-we-work"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { getHomepageContent } from "@/lib/reader"

export default async function Home() {
  const homepageContent = await getHomepageContent()

  return (
    <main>
      <Hero content={homepageContent} />
      <Features content={homepageContent} />
      <HowWeWork content={homepageContent} />
      <ContactForm data={{
        title: homepageContent.contactTitle,
        subtitle: homepageContent.contactSubtitle,
        form: {
          name: "Όνομα",
          email: "Email",
          phone: "Τηλέφωνο",
          voicePrompt: "Πάτησε το μικρόφωνο και πες μας για το project σου",
          voiceListening: "Σε ακούω... Μίλα τώρα!",
          voiceTranscript: "Αυτό που είπες:",
          submit: "Αποστολή",
        },
      }} />
      <Footer />
    </main>
  )
}