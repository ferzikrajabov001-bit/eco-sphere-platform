import { ProductCard } from '@/components/ProductCard';

// Временные данные, пока не подключена база
const MOCK_PRODUCTS = [
  { id: '1', sku: 'CHEM-001', name: 'Средство для уборки сантехники PRO', price: 450, unit: 'шт' },
  { id: '2', sku: 'COSM-002', name: 'Шампунь гостиничный 30мл', price: 18, unit: 'шт' },
  { id: '3', sku: 'SLIP-003', name: 'Тапочки отельные белые', price: 65, unit: 'пара' },
  { id: '4', sku: 'TRASH-004', name: 'Мусорные пакеты 120л', price: 320, unit: 'рул' },
];

export default function CatalogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Каталог продукции</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
