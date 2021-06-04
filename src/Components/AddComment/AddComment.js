import React, { useContext, useState } from 'react';
import cn from 'classnames';
import Context from "../../context";

import './AddComment.scss'

function AddComment(props) {
    const { addComment } = useContext(Context);
    const [ comment, setComment ] = useState('');
    const [ active, setActive ] = useState(false);
    const { index, onAdd, onCancel } = props;

    const handleAddClick = () => {
        addComment.call(null, [index, comment]);
        setComment('');

        onAdd && onAdd();
    }

    const handleCancelClick = () => {
        setComment('');
        setActive(false);

        onCancel && onCancel();
    }

    const handleFocus = () => {
        setActive(true);
    }

    const handleBlur = () => {
        !comment && setActive(false);
    }

    return (
        <div className={cn({
            'add-comment': true,
            'add-comment_active': active
        })}>
            <div className="add-comment__textarea-block">
                <textarea
                    className="add-comment__textarea"
                    placeholder="Write Something..."
                    value={comment}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={e => setComment(e.target.value)}
                />
            </div>
            <div className={cn({
                'add-comment__buttons': true,
                'add-comment__buttons_show': active
            })}>
                <button
                    className="add-comment__button add-comment__button_cancel"
                    onClick={handleCancelClick}
                >
                    Cancel
                </button>
                <button
                    className="add-comment__button add-comment__button_add"
                    onClick={handleAddClick}
                >
                    Add Comment
                </button>
            </div>
        </div>
    );
}

export default AddComment;