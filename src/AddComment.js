import React, { useContext, useState } from 'react';
import Context from "./context";

import './AddComment.scss'

function AddComment() {
    const { addComment } = useContext(Context);
    const [ comment, setComment ] = useState('');

    return (
        <div className="add-comment">
            <textarea className="add-comment__textarea" placeholder="Write Something..." value={comment} onChange={e => setComment(e.target.value)}/>
            <button className="add-comment__button" onClick={addComment.bind(null, comment)}>Add Comment</button>
        </div>
    );
}

export default AddComment;