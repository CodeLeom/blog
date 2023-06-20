import React, { useState, useEffect } from 'react'
import CreateComment from './CreateComment'
import ListComment from './ListComment'
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
            <div className="mx-3 mb-2 p-4 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                    <h2 className="text-lg mb-2">{post.title}</h2>
                        <ListComment postId={post.id} className="text-gray-700 text-base hover:text-gray-900 transition-all duration-200" />
                        <CreateComment postId={post.id} />
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
