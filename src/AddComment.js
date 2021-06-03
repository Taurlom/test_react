import React from 'react';
import './AddComment.scss'

function AddComment() {
    return (
        <div className="add-comment">
            <input className="add-comment__input" type="textarea" placeholder="Write Something..."/>
        </div>
    );
}

export default AddComment;