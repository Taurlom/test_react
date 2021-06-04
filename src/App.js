import React, { useState } from 'react'
import './App.scss';
import Comment from './Components/Comment/Comment';
import AddComment from './Components/AddComment/AddComment';
import Context from "./context";

function App(props) {
  const { data, user } = props;
  const [tree, setTree] = useState(data);

  function getPath(index) {
      let path = 'newTree';
      let len = index.length;

      for (let i = 0; i < len - 1; i++) {
          if (len > 1) {
              path += `[${index[i]}].thread`
          }
      }

      return path;
  }

  function deleteComment(index) {
      let newTree = [...tree];
      let path = getPath(index);

      eval(path).splice(index[index.length - 1], 1);
      setTree(newTree);
  }

  function addComment(comment) {
      const newTree = [...tree];
      const date = new Date();
      const [index, message] = comment;

      if (index !== null) {
          const path = getPath(index);
          let thread = eval(path)[index[index.length -1]].thread;

          if (!thread) { eval(path)[index[index.length -1]].thread = [] }

          eval(path)[index[index.length -1]].thread.push({
              user: user,
              message: message,
              time: date.toLocaleString('ru')
          })
      } else {
          newTree.push({
              user: user,
              message: message,
              time: date.toLocaleString('ru')
          });
      }

      setTree(newTree);
  }

  return (
    <Context.Provider value={{ deleteComment, addComment }}>
        <div className="comments">
            {tree.map((comment, i) => {
                return (<Comment
                    index={`${i}`}
                    time={comment.time}
                    user={comment.user}
                    message={comment.message}
                    thread={comment.thread || []}
                />)
            })}
            <AddComment index={null}/>
        </div>
    </Context.Provider>
  );
};

export default App;
