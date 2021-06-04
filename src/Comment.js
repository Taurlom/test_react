import React, { useContext, useState } from 'react';
import Context from "./context";
import './Comment.scss'
import AddComment from "./AddComment";

function Comment(props) {
    const { user, id, time, message } = props;
    const { avatar, name } = user;
    const [reply, setReply] = useState(false);
    const { deleteComment } = useContext(Context);

    const handleReply = () => {
        setReply(true);
    }

    return (
        <div>
            <div key={id} className="comment">
                <div className="comment-header">
                    <div className="comment-header__avatar" />
                    <div>
                        <div className="comment-header__username">
                            {name}
                        </div>
                        <div className="comment-header__comment-time">
                            {time}
                        </div>
                    </div>
                </div>
                <div className="comment-content">{message}</div>
                <div className="comment-bar">
                    <button className="comment-bar__button" onClick={handleReply}>Reply</button>
                    <button className="comment-bar__button" onClick={deleteComment.bind(null, id)}>Remove</button>
                    <div className="comment-bar__dots"></div>
                </div>
            </div>

            {reply && (
                <div className='comment-thread'>
                    <AddComment thread={id} />
                </div>
            )}
        </div>
    )
};

export default Comment;