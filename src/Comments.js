import React, { useState } from 'react'
import './Comments.scss';
import Comment from './Comment';
import AddComment from './AddComment';
import Context from "./context";

function Comments(props) {
  const { data, user } = props;
  const [tree, setTree] = useState(data);

  function deleteComment(id) {
      setTree(tree.filter(item => item.id !== id))
  }

  function addComment(comment) {
      const newTree = [...tree];
      const date = new Date();

      newTree.push({
          id: `${new Date().getTime()}`,
          user: user,
          message: comment[0],
          time: date.toLocaleString('ru')
      });

      setTree(newTree);
  }

  return (
    <Context.Provider value={{ deleteComment, addComment }}>
        <div className="comments">
            {tree.map(comment => {
                return (<Comment
                    id={`${new Date().getTime()}`}
                    time={comment.time}
                    user={comment.user}
                    message={comment.message}
                    thread={comment.thread}
                />)
            })}
            <AddComment/>
        </div>
    </Context.Provider>
  );
};

export default Comments;
