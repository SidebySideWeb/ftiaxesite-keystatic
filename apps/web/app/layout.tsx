import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "@/components/header"
import { getSettings } from "@/lib/reader"
import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()
  
  return {
    title: `${settings.siteName} - Φτιάξε το site σου σε 48 ώρες`,
    description: settings.siteDescription,
    generator: "v0.app",
    icons: {
      icon: settings.favicon || '/favicon.ico',
      shortcut: settings.favicon || '/favicon.ico',
      apple: settings.favicon || '/favicon.ico',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto">
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        {process.env.NEXT_PUBLIC_VERCEL && <Analytics />}
      </body>
    </html>
  )
}
