import './Comments.scss';
import data from './data';
import Comment from './Comment';
import AddComment from './AddComment';

function Comments() {
  return (
    <div className="comments">
        {data.map(comment => {
            return (
                <Comment id={comment.id} time={comment.time} user={comment.user} message={comment.message}/>
            );
        })}
        <AddComment/>
    </div>
  );
};

export default Comments;
