import React, { useState, useEffect } from 'react'
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
            <div className='card' key={post.id}>
                <div className='card-body'>
                    <h3> {post.title} </h3>
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
