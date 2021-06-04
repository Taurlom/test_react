import React, { useContext, useState } from 'react';
import Context from "./context";
import cn from 'classnames'
import './Comment.scss'
import AddComment from "./AddComment";

function Comment(props) {
    const { user, id, time, message, thread, index } = props;
    const { avatar, name } = user;
    const [reply, setReply] = useState(false);
    const { deleteComment } = useContext(Context);

    const handleReply = () => {
        setReply(true);
    }

    return (
        <div className={cn({
            'comment': true
        })}>
            <div>
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
                    <button className="comment-bar__button" onClick={deleteComment.bind(null, index)}>Remove</button>
                    <div className="comment-bar__dots"></div>
                </div>
            </div>

            {reply && (
                <div className='comment-input'>
                    <AddComment index={index} />
                </div>
            )}

            {thread && thread !== [] && (
                <div className='comment-thread'>
                    {thread.map((comment, i) => {
                        return (<Comment
                            index={index + i}
                            time={comment.time}
                            user={comment.user}
                            message={comment.message}
                            thread={comment.thread || []}
                        />)
                    })}
                </div>
            )}
        </div>
    )
};

export default Comment;