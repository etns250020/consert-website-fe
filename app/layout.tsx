import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MusicalBackground } from "@/components/musical-background"
import { ThemeProvider } from "@/components/theme-provider"
import { Meteors } from "@/components/ui/meteors"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            <Navigation />
            {children}
            <Footer />
          </div>
          {/* <MusicalBackground /> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
