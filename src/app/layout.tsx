import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Josh Zhang',
  description: 'Welcome to my personal website!',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}