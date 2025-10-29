import { config, fields, collection, singleton } from '@keystatic/core'

// Determine storage configuration based on environment variables
const githubOwner = process.env.KEYSTATIC_GITHUB_OWNER
const githubRepo = process.env.KEYSTATIC_GITHUB_REPO
const hasGitHubConfig = githubOwner && githubRepo

const keystaticConfig = config({
  storage: hasGitHubConfig
    ? {
        kind: 'github',
        repo: `${githubOwner}/${githubRepo}`,
        ...(process.env.KYESTATIC_GITHUB_APP_SLUG && {
          githubAppSlug: process.env.KYESTATIC_GITHUB_APP_SLUG,
        }),
      }
    : {
        kind: 'local',
      },
  ui: {
    brand: {
      name: 'ftiaxesite.gr Admin',
    },
  },
  collections: {
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
        publishedAt: fields.datetime({ 
          label: 'Published Date',
          defaultValue: { kind: 'now' },
        }),
      },
    }),
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
        publishedAt: fields.datetime({ 
          label: 'Published Date',
          defaultValue: { kind: 'now' },
        }),
        author: fields.text({ label: 'Author' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
        }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'content/settings',
      schema: {
        siteName: fields.text({ 
          label: 'Site Name',
          defaultValue: 'ftiaxesite.gr',
        }),
        siteDescription: fields.text({ 
          label: 'Site Description', 
          multiline: true,
          defaultValue: 'AI Websites σε 48 Ώρες',
        }),
        contactEmail: fields.text({ 
          label: 'Contact Email',
          defaultValue: 'info@ftiaxesite.gr',
        }),
        contactPhone: fields.text({ 
          label: 'Contact Phone',
          defaultValue: '+30 210 1234567',
        }),
        address: fields.text({ 
          label: 'Address', 
          multiline: true,
        }),
        favicon: fields.image({
          label: 'Favicon',
          directory: 'public',
          publicPath: '/',
        }),
        // Header/Footer Content
        logoText: fields.text({ 
          label: 'Logo Text',
          defaultValue: 'ftiaxesite.gr',
        }),
        navigationLinks: fields.array(
          fields.object({
            label: fields.text({ label: 'Link Label' }),
            href: fields.text({ label: 'Link URL' }),
          }),
          {
            label: 'Navigation Links',
            itemLabel: (item: any) => item?.label || 'Link',
          }
        ),
        footerCopyright: fields.text({ 
          label: 'Footer Copyright',
          defaultValue: '© 2025 ftiaxesite.gr – Κατασκευή Ιστοσελίδων με AI',
        }),
        footerLinks: fields.array(
          fields.object({
            label: fields.text({ label: 'Link Label' }),
            href: fields.text({ label: 'Link URL' }),
          }),
          {
            label: 'Footer Links',
            itemLabel: (item: any) => item?.label || 'Link',
          }
        ),
      },
    }),
        homepage: singleton({
          label: 'Homepage Content',
          path: 'content/homepage',
          schema: {
            heroHeadline: fields.text({
              label: 'Hero Headline',
              defaultValue: 'Φτιάξε το site σου σε 48 ώρες — από 250€',
            }),
            heroSubheadline: fields.text({
              label: 'Hero Subheadline',
              multiline: true,
              defaultValue: 'Με τη δύναμη της Τεχνητής Νοημοσύνης, δημιουργούμε γρήγορα, οικονομικά και επαγγελματικά websites.',
            }),
            heroCta: fields.text({
              label: 'Hero CTA Button',
              defaultValue: 'Ξεκίνα τώρα',
            }),
            heroImage: fields.image({
              label: 'Hero Image',
              directory: 'public/images',
              publicPath: '/images/',
            }),
            heroBadge: fields.text({
              label: 'Hero Badge Text',
              defaultValue: 'AI-Powered Web Development',
            }),
            heroStats: fields.text({
              label: 'Hero Stats Text',
              defaultValue: '100+ ικανοποιημένοι πελάτες',
            }),
            featuresTitle: fields.text({
              label: 'Features Section Title',
              defaultValue: 'Γιατί να μας επιλέξεις',
            }),
            featuresSubtitle: fields.text({
              label: 'Features Section Subtitle',
              multiline: true,
              defaultValue: 'Όλα όσα χρειάζεσαι για να έχεις έτοιμο το website σου σε 48 ώρες',
            }),
            contactTitle: fields.text({
              label: 'Contact Form Title',
              defaultValue: 'Ξεκίνα σήμερα',
            }),
            contactSubtitle: fields.text({
              label: 'Contact Form Subtitle',
              multiline: true,
              defaultValue: 'Πες μας τι χρειάζεσαι — μίλησε το brief σου με ένα κλικ.',
            }),
        // Features Grid Content
        featuresItems: fields.array(
          fields.object({
            title: fields.text({ label: 'Feature Title' }),
            description: fields.text({ label: 'Feature Description', multiline: true }),
            icon: fields.select({
              label: 'Icon',
              options: [
                { label: 'Clock', value: 'Clock' },
                { label: 'Euro', value: 'Euro' },
                { label: 'TrendingUp', value: 'TrendingUp' },
                { label: 'Shield', value: 'Shield' },
                { label: 'Smartphone', value: 'Smartphone' },
                { label: 'Zap', value: 'Zap' },
              ],
              defaultValue: 'Clock',
            }),
          }),
          {
            label: 'Features Items',
            itemLabel: (item: any) => item?.title || 'Feature',
          }
        ),
        // How We Work Content
        howWeWorkTitle: fields.text({ 
          label: 'How We Work Title',
          defaultValue: 'Πώς δουλεύουμε',
        }),
        howWeWorkSubtitle: fields.text({ 
          label: 'How We Work Subtitle', 
          multiline: true,
          defaultValue: 'Από την ιδέα στην online παρουσία — απλά, γρήγορα και αποτελεσματικά.',
        }),
        processSteps: fields.array(
          fields.object({
            number: fields.text({ label: 'Step Number' }),
            title: fields.text({ label: 'Step Title' }),
            description: fields.text({ label: 'Step Description', multiline: true }),
            icon: fields.select({
              label: 'Icon',
              options: [
                { label: 'FileText', value: 'FileText' },
                { label: 'Wand2', value: 'Wand2' },
                { label: 'CheckCircle2', value: 'CheckCircle2' },
              ],
              defaultValue: 'FileText',
            }),
          }),
          {
            label: 'Process Steps',
            itemLabel: (item: any) => item?.title || 'Step',
          }
        ),
      },
    }),
  },
})

export default keystaticConfig
export const reader = keystaticConfig
