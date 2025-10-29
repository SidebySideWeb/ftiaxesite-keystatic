import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Όροι Χρήσης - ftiaxesite.gr',
  description: 'Όροι χρήσης της ιστοσελίδας ftiaxesite.gr',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-8">Όροι Χρήσης</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">1. Γενικές Διατάξεις</h2>
          <p>
            Καλώς ήρθατε στην ιστοσελίδα ftiaxesite.gr. Με την πρόσβαση και χρήση αυτής της ιστοσελίδας,
            αποδέχεστε τους όρους και προϋποθέσεις που αναφέρονται παρακάτω.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">2. Υπηρεσίες</h2>
          <p>
            Η ftiaxesite.gr παρέχει υπηρεσίες κατασκευής ιστοσελίδων με χρήση Τεχνητής Νοημοσύνης.
            Όλες οι υπηρεσίες παρέχονται σύμφωνα με τους όρους που αναφέρονται στις συναλλαγές μας.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">3. Προστασία Δεδομένων</h2>
          <p>
            Τοποθετούμε υψηλή προτεραιότητα στην προστασία των προσωπικών δεδομένων σας.
            Για περισσότερες πληροφορίες, παρακαλούμε ανατρέξτε στην{' '}
            <a href="/privacy" className="text-teal hover:underline">Πολιτική Απορρήτου</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">4. Επικοινωνία</h2>
          <p>
            Για οποιαδήποτε ερώτηση σχετικά με τους όρους χρήσης, επικοινωνήστε μαζί μας στο{' '}
            <a href="mailto:info@ftiaxesite.gr" className="text-teal hover:underline">info@ftiaxesite.gr</a>.
          </p>
        </section>

        <section>
          <p className="text-sm text-gray-500 mt-8">
            Τελευταία ενημέρωση: Ιανουάριος 2025
          </p>
        </section>
      </div>
    </div>
  )
}

