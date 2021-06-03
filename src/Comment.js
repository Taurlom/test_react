import React from 'react';
import './Comment.scss'

function Comment(props) {
    const { user, id, time, message } = props;
    const { avatar, name } = user;

    return (
        <div key={id} className="comment">
            <div className="comment-header">
                <div className="comment-header__avatar"></div>
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
        </div>
    )
};

export default Comment;