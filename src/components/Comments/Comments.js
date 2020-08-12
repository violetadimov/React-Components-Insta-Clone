import React, { useState } from 'react';
import Comment from './Comment';
import './Comments.css';
import dummyData from '../../dummy-data'

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  //const [commentData] = useState(dummyData);
  const { comments } = props

  return (
    <div>
      {/* map through the comments prop and render a Comment for 
      every piece of data */
      comments.map(comment => {
        return <Comment key={comment.id} comment={comment}/>
      })
      }
    </div>
  );
};

export default Comments;
