import React, {useState} from 'react'
import axios from 'axios'

function CreateComment({postId}) {
    const [content, setContent] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        })

        setContent('')
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <label className='block text-gray-700 text-sm font-bold mt-2 mb-2'>New Comment</label>
                <input value={content} onChange={e => setContent(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
                <button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Submit</button>
        </form>
    </div>
  )
}

export default CreateComment
