import React from 'react'
import "./comment.styles.css"

const Comment = ({removeComment,id,comment,role,ind,user}) => {
    return (
        <div className="comment-div">
            <p className="comment-para">{user}: {comment}</p>
            {role ? <button type="button" className="comment-button-two" onClick={() => removeComment(id,ind)}>Remove</button> : null} 
        </div>
    )
}

export default Comment;
