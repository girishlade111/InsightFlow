import type React from "react"
import type { Metadata } from "next"
import { Geist as GeistSans } from "next/font/google" // Changed from Inter
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { SocialFooter } from "@/components/social-footer"

const geistSans = GeistSans({ subsets: ["latin"] }) // Changed variable name and font

export const metadata: Metadata = {
  title: "InsightFlow",
  description: "Manage and track v0 feedback and feature requests for the InsightFlow.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "InsightFlow",
    description: "Manage and track v0 feedback and feature requests for the InsightFlow.",
    images: [
      {
        url: "/og-image.png",
        width: 1194,
        height: 834,
        alt: "InsightFlow - Manage and track feedback and feature requests",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InsightFlow",
    description: "Manage and track v0 feedback and feature requests for the InsightFlow.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className + " min-h-screen flex flex-col"}>
        {" "}
        {/* Applied new font class */}
        <Suspense fallback={null}>
          <Analytics />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <SocialFooter />
            <Toaster />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
