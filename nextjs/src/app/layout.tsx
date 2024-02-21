import { Header } from '@/components/main_layout/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getAllCategories, getContacts } from '@/api/getData'
import { Footer } from '@/components/main_layout/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ремтул',
  description: 'Ремонт строительного инструмента',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getAllCategories();
  const contacts = await getContacts();
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header categories={categories} />
        {children}
        <Footer categories={categories} contacts={contacts} />
      </body>
    </html>
  )
}
