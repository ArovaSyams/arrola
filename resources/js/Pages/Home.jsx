import HeadNav from '@/Components/HeadNav'
import Hero from '@/Components/Hero'
import Receipts from '@/Components/Receipts'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Home = ({ receipts, images }) => {
  return (
    <GuestLayout>
      <Head title="Arrola"  />
      <Hero title="Receipes" />
      <Receipts 
        receipts={receipts} 
        images={images}
      />
    </GuestLayout>
  )
}

export default Home