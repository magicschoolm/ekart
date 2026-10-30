import React from 'react'

export const CartSidebar = ({ cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      {isCartOpen && (
        <button
          aria-label="Close cart"
          className="fixed inset-0 z-20 cursor-default bg-black/30"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 z-30 flex h-full w-80 max-w-full flex-col bg-white shadow-xl transition-transform duration-300 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold text-emerald-600">Your Cart</h2>
          <button
            aria-label="Close cart"
            className="text-2xl text-gray-600 hover:text-gray-800"
            onClick={() => setIsCartOpen(false)}
          >
            x
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="mt-10 text-center text-gray-600">Your Cart is Empty</p>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-4 flex border-b pb-4">
                  <img src={item.image} alt={item.name} className="mr-4 h-16 w-16 object-contain" />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">₹{item.price} x {item.quantity}</p>
                    <div className="mt-2 flex items-center">
                      <button
                        aria-label={`Decrease ${item.name} quantity`}
                        className="rounded bg-gray-200 px-2 py-1"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        aria-label={`Increase ${item.name} quantity`}
                        className="rounded bg-gray-200 px-2 py-1"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="ml-auto text-sm text-red-600 hover:text-red-800"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t p-4">
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
export default CartSidebar