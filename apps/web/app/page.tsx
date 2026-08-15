import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-brand-graphite">
            Профессиональное снабжение HoReCa и бизнеса
          </h1>
          <p className="text-lg text-brand-steel mb-8 leading-relaxed">
            Профессиональная химия, гостиничные принадлежности и расходные материалы с поставкой под задачи вашего объекта.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/checkout" 
              className="bg-brand-graphite text-white px-8 py-4 rounded-sm font-medium hover:bg-brand-eco transition-colors"
            >
              Получить предложение
            </Link>
            <Link 
              href="/catalog" 
              className="border border-brand-graphite px-8 py-4 rounded-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Смотреть каталог
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-gray-400">
          [Изображение продукции]
        </div>
      </section>

      {/* Categories Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Основные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Проф. химия', 'Гостиничная косметика', 'Тапочки', 'Расходники'].map((cat) => (
            <div key={cat} className="bg-white p-6 border border-gray-200 hover:border-brand-eco transition-colors cursor-pointer">
              <span className="font-medium">{cat}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
