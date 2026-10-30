import React from 'react'

export const Navbar = ({ search, setSearch, cartItems, setIsCartOpen }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  return (
    <nav className='bg-emerald-800 p-4 sticky top-0 z-10 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 className='text-white text-2xl font-normal'>
          Smartphone Store
        </h1>
        <input 
        type='text' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Seratch for smartphone, brands, colour' 
        className="p-3 text-base rounded bg-white w-1/2 text-gray-800 placeholder-gray-400 shadow-inner focus:outline-none focus: ring-2 focus:ring-white transition duration-200"/>

        <button className='relative text-white text-3xl'
          onClick={() => setIsCartOpen(true)}>
          {totalItems > 0 && <span className='absolute -top-2 right-2 bg-red-500 px-2 py-1 rounded-full text-sm'>{totalItems}

            </span>}

        </button>
      </div>
    </nav>
  )
}

export default Navbar;
