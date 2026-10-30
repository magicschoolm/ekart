import React, { useState } from 'react'
import products from "../../products.json"

const Sildebar = ({ brands, selectedBrand, setSelectedBrand, priceRange, setPriceRange, setSelectedRam, selectedRam, selectedStorage, setSelectedStorage}) => {
  const ramOptions = [...new Set (products.map((p) => p.ram))].sort((a, b)=> a-b)
  const storageOptions = [...new Set (products.map((p) => p.storage))].sort((a, b)=> a-b)
  const minPrice = Math.min(...products.map((p) => p.price))
  const maxPrice = Math.max(...products.map((p) => p.price))
    return (

      <div className='w-64 bg-gray-100 p-4 h-screen sticky top-16 overflow-y-auto shadow-inner'>
        <h2 className='text-xl font-semibold text-emerald-800 mb-6'>
          Filters
        </h2>
        {/* brand filter */}
        <div className='mb-6'>
          <h3 className='text-emerald-800 font-medium'>Brand</h3>
          { brands.map((brand) => (
          <label key={brand} className='flex items-center mb-2 curser-pointer'>
          <input type='checkbox' className='mr-2 accent-emerald-500' value={selectedBrand.includes(brand)}  onChange={()=> setSelectedBrand(selectedBrand.includes(brand)? selectedBrand.filter((b) => b !== brand) :  [...selectedBrand, brand])} />
          {brand.charAt(0).toUpperCase()+ brand.slice(1)}</label> ))}  
        </div>

         {/* ram filter  */}
        <div className='mb-6'>
          <h3 className='text-emerald-800 font-medium'>Ram</h3>
          <select className='w-full boder boder-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 p-2' value={selectedRam ?? ""} onChange={(e) => setSelectedRam(e.target.value ? (e.target.value) : null)} >
            <option value=""> All </option>
          { ramOptions.map((ram) => (
              <option key={ram} value={ram}>
                {ram}
                </option>
            ))}
            </select>
        </div>

 

        {/* storage filter */}
              <div className='mb-6'>
          <h3 className='text-emerald-800 font-medium'>Storage</h3>
          <select className='w-full boder boder-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 p-2' value={selectedStorage ?? ""} onChange={(e) => setSelectedStorage(e.target.value ? (e.target.value) : null)} >
            <option value=""> All </option>
          { storageOptions.map((storage) => (
              <option key={storage} value={storage}>
                {storage}
                </option>
            ))}
            </select>
        </div>



        {/* price filter */}
            <div className='mb-6'>
          <h3 className='text-emerald-800 font-medium'>price</h3>
            <input type="range" min={minPrice} max={maxPrice} value={priceRange[1]} onChange={(e) => setPriceRange([minPrice, parseInt(e.target.value)])} className='w-full accent-emerald-600'/>
            <div className='flex justify-between mt-2 text-sm'>
            <span>₹ {priceRange[0]}</span>
            <span>₹ {priceRange[1]}</span>
            
            </div>
      </div>
      </div>
    )
  }

  export default Sildebar;