import React from 'react'

function ListComment({ comments }) {
   //The state is no loger needed
   //as we are now getting request directly from the query service

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })
  return (
    <ul className='list-disc px-3'>
        {renderedComments}
    </ul>
  )
}

export default ListComment
