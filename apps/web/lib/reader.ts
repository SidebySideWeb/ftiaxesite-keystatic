import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'js-yaml'

const contentDir = path.join(process.cwd(), 'content')

// Read YAML file
async function readYamlFile(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      return yaml.load(fileContents)
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
  }
  return null
}

export async function getSettings() {
  const settings = await readYamlFile('content/settings/index.yaml')
  return settings || {
    siteName: 'ftiaxesite.gr',
    siteDescription: 'AI Websites σε 48 Ώρες',
    contactEmail: 'info@ftiaxesite.gr',
    contactPhone: '+30 210 1234567',
    address: 'Athens, Greece',
    favicon: '/favicon.ico',
    logoText: 'ftiaxesite.gr',
    navigationLinks: [
      { label: 'Λειτουργίες', href: '#features' },
      { label: 'Διαδικασία', href: '#process' },
    ],
    footerCopyright: '© 2025 ftiaxesite.gr – Κατασκευή Ιστοσελίδων με AI',
    footerLinks: [
      { label: 'Όροι Χρήσης', href: '/terms' },
      { label: 'Πολιτική Απορρήτου', href: '/privacy' },
    ],
  }
}

export async function getHomepageContent() {
      const homepage = await readYamlFile('content/homepage/index.yaml')
      return homepage || {
        heroHeadline: 'Φτιάξε το site σου σε 48 ώρες — από 250€',
        heroSubheadline: 'Με τη δύναμη της Τεχνητής Νοημοσύνης, δημιουργούμε γρήγορα, οικονομικά και επαγγελματικά websites.',
        heroCta: 'Ξεκίνα τώρα',
        heroImage: '/images/hero-image.jpg',
        heroBadge: 'AI-Powered Web Development',
        heroStats: '100+ ικανοποιημένοι πελάτες',
        featuresTitle: 'Γιατί να μας επιλέξεις',
        featuresSubtitle: 'Όλα όσα χρειάζεσαι για να έχεις έτοιμο το website σου σε 48 ώρες',
        contactTitle: 'Ξεκίνα σήμερα',
        contactSubtitle: 'Πες μας τι χρειάζεσαι — μίλησε το brief σου με ένα κλικ.',
    // Features Grid Content
    featuresItems: [
      {
        title: 'Παράδοση σε 48 ώρες',
        description: 'Το website σου είναι έτοιμο μέσα σε δύο μέρες.',
        icon: 'Clock',
      },
      {
        title: 'Από 250€',
        description: 'Χαμηλό κόστος χωρίς κρυφές χρεώσεις.',
        icon: 'Euro',
      },
      {
        title: 'SEO & Analytics',
        description: 'Έτοιμο για Google με ενσωματωμένο Tag Manager.',
        icon: 'TrendingUp',
      },
      {
        title: 'Cookie Consent',
        description: 'Συμμόρφωση με GDPR και απόλυτη διαφάνεια.',
        icon: 'Shield',
      },
      {
        title: 'Responsive Design',
        description: 'Λειτουργεί άψογα σε κινητά, tablet και υπολογιστές.',
        icon: 'Smartphone',
      },
      {
        title: 'AI Technology',
        description: 'Χρησιμοποιούμε Τεχνητή Νοημοσύνη για γρήγορη ανάπτυξη.',
        icon: 'Zap',
      },
    ],
    // How We Work Content
    howWeWorkTitle: 'Πώς δουλεύουμε',
    howWeWorkSubtitle: 'Από την ιδέα στην online παρουσία — απλά, γρήγορα και αποτελεσματικά.',
    processSteps: [
      {
        number: '01',
        title: 'Συμπληρώνεις τη φόρμα',
        description: 'Μας λες τι χρειάζεσαι.',
        icon: 'FileText',
      },
      {
        number: '02',
        title: 'Δημιουργούμε το σχέδιο',
        description: 'Χρησιμοποιούμε AI για να σχεδιάσουμε το website σου.',
        icon: 'Wand2',
      },
      {
        number: '03',
        title: 'Παραδίδουμε σε 48 ώρες',
        description: 'Παραλαμβάνεις έτοιμο site με SEO & Analytics.',
        icon: 'CheckCircle2',
      },
    ],
  }
}

// Pages functionality removed - only homepage is active
export async function getAllPages() {
  return []
}

export async function getPage(slug: string) {
  return null
}

export async function getPublishedPages() {
  return []
}

export async function getAllPosts() {
  return [
    {
      slug: 'welcome-to-ftiaxesite',
      entry: {
        title: 'Welcome to ftiaxesite',
        description: 'Introducing our new AI-powered website development service',
        publishedAt: '2024-01-01T00:00:00.000Z',
        author: 'Development Team',
        tags: ['welcome', 'announcement', 'ai'],
      },
    },
  ]
}

export async function getPost(slug: string) {
  const posts = await getAllPosts()
  return posts.find(post => post.slug === slug)
}

export async function getPublishedPosts() {
  return await getAllPosts()
}
