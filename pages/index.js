import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Herosection from '@/components/Herosection'
import PopularProducts from '@/components/PopularProduct'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header />
      <Herosection />
      <Categories fromHome />
      <PopularProducts />
      <Footer />
    </div>
  )
}

export default index