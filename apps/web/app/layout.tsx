import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Эко Сфера — Профессиональное снабжение HoReCa',
  description: 'Профессиональная химия, гостиничные принадлежности и расходные материалы для бизнеса.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-brand-paper text-brand-graphite antialiased">
        {/* Header placeholder */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight text-brand-graphite">
              ЭКО <span className="text-brand-eco">СФЕРА</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/catalog" className="hover:text-brand-eco transition-colors">Каталог</a>
              <a href="/delivery" className="hover:text-brand-eco transition-colors">Доставка</a>
              <a href="/contacts" className="hover:text-brand-eco transition-colors">Контакты</a>
            </nav>
          </div>
        </header>
        
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer placeholder */}
        <footer className="bg-brand-graphite text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm opacity-70">
            © 2024 Эко Сфера. Профессиональное снабжение бизнеса.
          </div>
        </footer>
      </body>
    </html>
  )
}
