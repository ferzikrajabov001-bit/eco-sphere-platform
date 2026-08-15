'use client';

import { useCartStore } from '@/store/cart';

export function ProductCard({ product }: { product: any }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="h-48 bg-gray-50 flex items-center justify-center text-gray-300 text-sm">
        Фото товара
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs text-gray-400 mb-1 uppercase">{product.sku}</div>
        <h3 className="font-medium text-brand-graphite mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">
            {product.price} ₽/{product.unit}
          </span>
          <button
            onClick={() => addItem(product)}
            className="bg-brand-graphite text-white px-4 py-2 rounded-sm text-sm hover:bg-brand-eco transition-colors"
          >
            В заявку
          </button>
        </div>
      </div>
    </div>
  );
}
