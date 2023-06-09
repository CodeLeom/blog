import React, { useState } from 'react'
import axios from 'axios'

function PostCreate() {
  const [title, setTitle] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:4001/posts', {
      title
    })

    setTitle('')
  }
  return (
    <div className='container mx-auto px-4 mt-4'>
        <div className='w-full max-w-xs mx-9'>
          <form onSubmit={onSubmit} className='bg-gray-100 shadow-md rounded px-8 pt--6 pb-8 mb-4'>
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold pt-4 mb-2'>
                Title
                </label>
                <input value={title} onChange={e => setTitle(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default PostCreate
