import React, { useState, useEffect } from 'react'
import CreateComment from './CreateComment'
import axios from 'axios'

function PostList() {

    const [posts, setPosts] = useState({})

    //fetch the available posts from the Post endpoint
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4001/posts')

        setPosts(res.data)
    }

    //make the request from the Post once
    useEffect(() => {
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className='max-w-sm rounded overflow-hidden shadow-lg' key={post.id}>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>
                        <h3> {post.title} </h3>
                        <CreateComment postId={post.id} />
                    </div>
                    <p className='text-gray-700 text-base'>lorem ipsum dolor comment Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        )
    })

  return (
    <div>
      {renderedPosts}
    </div>
  )
}

export default PostList
