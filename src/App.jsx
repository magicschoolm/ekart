import products from "../products.json"
import { CartSidebar } from "./componentes/CartSidebar"
import Navbar from "./componentes/Navbar"
import ProductCard from "./componentes/ProductCard"
import Sildebar from "./componentes/Sildebar"
import { useState } from 'react'

const App = () => {
const brand = [...new Set (products.map((p) => p.brand))].sort()
const [priceRange, setPriceRange] = useState([Math.min(...products.map((p) => p.price)), Math.max(...products.map((p) => p.price))])
const [selectedBrand, setSelectedBrand] = useState([])
const [selectedRam, setSelectedRam] = useState(null)
const [selectedStorage, setSelectedStorage] = useState(null)

const [cartItems, setCartItems] = useState([])
const [isCartOpen, setIsCartOpen] = useState(false)

const addToCart = (product) => {
  setCartItems((prev) => {
    const existingItem = prev.find((item) => item.id === product.id)
    if (existingItem) {
      return prev.map((item) => item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item)
    }
    return [...prev, { ...product, quantity: 1 }]
  })
}
const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id))
}
const updateQuantity = (id, quantity) => {
  if (quantity <= 0) {
    removeFromCart(id)
    return
  }
  setCartItems((prev) => prev.map((item) => item.id === id ? { ...item, quantity } : item))
}



const [search, setSearch] = useState("")
const  filterproducts = products.filter((product) => {
  const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()) || product.color.toLowerCase().includes(search.toLowerCase())

  const matchesBrand = selectedBrand.length === 0 || selectedBrand.includes(product.brand)
  const matchesPrice = product.price >= priceRange[0] && product.price <=
  priceRange[1]
  const matchesRam = selectedRam === null || product.ram === selectedRam
  const matchesStorage = selectedStorage === null || product.storage === selectedStorage

  return matchesSearch && matchesBrand && matchesPrice && matchesRam && matchesStorage
})
  return (
    <>
      <Navbar search={search} setSearch={setSearch} cartItems={cartItems} setIsCartOpen={setIsCartOpen}/>
      <div className="flex">
        <Sildebar brands = {brand} selectedBrand = {selectedBrand} setSelectedBrand = {setSelectedBrand} priceRange = {priceRange}  setPriceRange = {setPriceRange} selectedRam = {selectedRam} setSelectedRam = {setSelectedRam} selectedStorage = {selectedStorage} setSelectedStorage = {setSelectedStorage} search = {search} setSearch = {setSearch}/>

          <div className="flex-1 bg-emerald-50" >
          <div className="max-w-7xl p-4 mx-auto">
         <h2 className="text-2xl text-emerald-900 font-bold p-4">
          Products ({filterproducts.length})</h2>
          {filterproducts.length == 0 ? (
          <p className="text-center text-gray-600">No Products avalable</p>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterproducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
        </div>
          )}
        </div>
        </div>
        < CartSidebar updateQuantity={updateQuantity} removeFromCart={removeFromCart} addToCart={addToCart} setCartItems={setCartItems} cartItems={cartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        </div>
        </>


  );
}

export default App;