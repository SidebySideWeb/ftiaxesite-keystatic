import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Πολιτική Απορρήτου - ftiaxesite.gr',
  description: 'Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων της ftiaxesite.gr',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-navy mb-8">Πολιτική Απορρήτου</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">1. Γενικά</h2>
          <p>
            Η ftiaxesite.gr σέβεται την ιδιωτικότητά σας και δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα.
            Αυτή η πολιτική απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">2. Συλλογή Δεδομένων</h2>
          <p>
            Συλλέγουμε προσωπικά δεδομένα που μας παρέχετε εθελοντικά, όπως όνομα, email και τηλέφωνο,
            όταν συμπληρώνετε τη φόρμα επικοινωνίας μας.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">3. Χρήση Δεδομένων</h2>
          <p>
            Τα προσωπικά δεδομένα που συλλέγουμε χρησιμοποιούνται αποκλειστικά για:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Απάντηση στα αιτήματά σας</li>
            <li>Παροχή των υπηρεσιών μας</li>
            <li>Βελτίωση της εμπειρίας χρήστη</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">4. Προστασία Δεδομένων</h2>
          <p>
            Υιοθετούμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των προσωπικών σας δεδομένων
            από μη εξουσιοδοτημένη πρόσβαση, απώλεια ή καταστροφή.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">5. Cookies</h2>
          <p>
            Η ιστοσελίδα μας χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας χρήστη.
            Μπορείτε να διαχειριστείτε τις προτιμήσεις cookies μέσω των ρυθμίσεων του browser σας.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-navy mb-4">6. Δικαιώματα σας</h2>
          <p>
            Έχετε το δικαίωμα να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των προσωπικών σας δεδομένων.
            Για οποιαδήποτε αίτημα, επικοινωνήστε μαζί μας στο{' '}
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

