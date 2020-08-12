import React, { useState } from 'react';
import Comment from './Comment';
import './Comments.css';
import dummyData from '../../dummy-data'

const Comments = () => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const [commentData] = useState(dummyData);

  return (
    <div>
      {/* map through the comments prop and render a Comment for 
      every piece of data */
      commentData.map(comment => {
        return <Comment comment={comment.comments}/>
      })
      }
    </div>
  );
};

export default Comments;
