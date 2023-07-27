import React from 'react'

function ListComment({ comments }) {
   //The state is no loger needed
   //as we are now getting request directly from the query service

    const renderedComments = comments.map(comment => {

      let content

      if(comment.status === 'approved'){
        content = comment.content
      } else if (comment.status === 'pending'){
        content = 'This comment is awaiting moderation'
      } else {
        content = 'This comment has been rejected'
      }

        return <li key={comment.id}>{content}</li>
    })
  return (
    <ul className='list-disc px-3'>
        {renderedComments}
    </ul>
  )
}

export default ListComment
