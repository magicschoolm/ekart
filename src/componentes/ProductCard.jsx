import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow p-4 hover:shadow-xl transition-all duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />

      <h3 className="text-lg font-semibold mb-2 text-emerald-500">
       { product.name }
      </h3>

      <p className="text-gray-500 mb-1">{ product.brand } | { product.color }</p>
      <p className="text-gray-500 mb-1">{ product.ram } | { product.storage }</p>
      <p className="text-gray-500 mb-4">{ product.display }</p>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-bold text-emerald-800">₹ { product.price }</p>
          <p className="text-sm text-gray-400 line-through">₹ { product.mrp }</p>
        </div>

        <button onClick={ () => addToCart(product)} className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;