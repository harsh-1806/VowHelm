import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Altor Smart Mobility | Smart Helmets and Safety Technology',
    description:
        'Altor Smart Mobility offers innovative smart helmets with accident detection, SOS alerts, and hands-free communication for safer motorcycle rides.',
    keywords:
        'smart helmet, motorcycle safety, SOS alerts, accident detection, rider safety, Altor',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
