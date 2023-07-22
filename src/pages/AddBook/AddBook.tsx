import AddBookForm from '@/components/AddBookForm'
import React from 'react'

export default function AddBook() {
  return (
    <div className='pt-16'>
        <p className='text-3xl text-center'>Add Your Book</p>
     <div className='grid justify-center'>
     <AddBookForm/>

     </div>
    </div>
  )
}
