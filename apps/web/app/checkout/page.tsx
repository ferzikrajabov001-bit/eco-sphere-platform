'use client';

import { useCartStore } from '@/store/cart';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCartStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет вызов API
    alert('Заявка отправлена! (Демо режим)');
    clearCart();
    router.push('/');
  };

  if (items.length === 0) {
    return <div className="p-20 text-center">Корзина пуста</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Оформление заявки</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Компания" required className="w-full border p-3 rounded-sm" />
          <input type="text" placeholder="ИНН" className="w-full border p-3 rounded-sm" />
          <input type="text" placeholder="Контактное лицо" required className="w-full border p-3 rounded-sm" />
          <input type="tel" placeholder="Телефон" required className="w-full border p-3 rounded-sm" />
          <button type="submit" className="w-full bg-brand-eco text-white py-4 rounded-sm font-bold">
            Отправить заявку
          </button>
        </form>

        <div className="bg-white p-6 border border-gray-200 h-fit">
          <h2 className="font-bold mb-4">Состав заявки</h2>
          <div className="space-y-2 mb-4">
            {items.map(item => (
              <div key={item.productId} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>{item.price * item.quantity} ₽</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 font-bold flex justify-between">
            <span>Итого:</span>
            <span>{total()} ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
}
