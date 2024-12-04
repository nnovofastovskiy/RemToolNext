import { Header } from '@/components/main_layout/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { getAllCategories, getContacts } from '@/api/getData'
import { Footer } from '@/components/main_layout/Footer/Footer'

const montserrat = localFont({ src: "../../public/fonts/Montserrat-VariableFont_wght.ttf" })

export const metadata: Metadata = {
  title: 'Ремтул',
  description: 'Ремонт строительного инструмента',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
