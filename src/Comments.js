import React, { useState } from 'react'
import './Comments.scss';
import data from './data';
import Comment from './Comment';
import AddComment from './AddComment';
import Context from "./context";

function Comments() {
  const [ tree, setTree ] = useState(data);

  function deleteComment(id) {
      setTree(
          tree.filter(item => item.id !== id)
      )
  }

  return (
    <Context.Provider value={{ deleteComment }}>
        <div className="comments">
            {tree.map(comment => {
                return (
                    <Comment id={comment.id} time={comment.time} user={comment.user} message={comment.message}/>
                );
            })}
            <AddComment/>
        </div>
    </Context.Provider>
  );
};

export default Comments;
