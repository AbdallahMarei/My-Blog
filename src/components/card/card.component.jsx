import React from 'react'
import "./card.styles.css"
import Comment from "../comment/comment.component"

class Card extends React.Component {
    constructor(props){
        super(props);

        this.state={
            comment: ""
        }
    }

    handleClick = () => {
        if(!localStorage.getItem("posts")){
            localStorage.setItem(`${this.props.id} counter`, JSON.stringify(0));
            this.setState({})
        } else {
            let counterLocal = JSON.parse(localStorage.getItem(`${this.props.id} counter`))
            counterLocal += 1
            localStorage.setItem(`${this.props.id} counter`, JSON.stringify(counterLocal))
            this.setState({})
        }
    }
    handleComment = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }
    handleCommentSubmit = (e,id,comment) => {
        e.preventDefault();
        const commentArray = [comment];
    if(!localStorage.getItem(`${id} comment`)){
      localStorage.setItem(`${id} comment`, JSON.stringify(commentArray))
      this.setState({comment: ""})
    } else {
      const commentsLocal = JSON.parse(localStorage.getItem(`${id} comment`))
      commentsLocal.push(comment)
      localStorage.setItem(`${id} comment`, JSON.stringify(commentsLocal))
      this.setState({comment: ""})
    }
    }

    removeComment = (id,ind) => {
        let removeArray = JSON.parse(localStorage.getItem(`${id} comment`))
        console.log(removeArray)
        let newArray = removeArray.filter((element,index) => {
            return (index)!==ind
        })
        localStorage.setItem(`${id} comment`, JSON.stringify(newArray));
        this.setState({})
    }
    

    render(){
        const localCounter = JSON.parse(localStorage.getItem(`${this.props.id} counter`))
        const comments = JSON.parse(localStorage.getItem(`${this.props.id} comment`))
        const {comment} = this.state
        return (
            <div className="contain">
            <div className="card-container">
                <div>
               <h1 className="card-heading">{this.props.post.title}</h1> 
               <p className="card-desc">{this.props.post.desc}</p>
                </div>
               <div className="utilities">
               <span className="card-span">Likes: {localCounter ? localCounter : 0}</span>
              {this.props.role ? null : <button type="button" className="card-button" onClick={this.handleClick}>Like</button>} 
               </div>
               {this.props.role ? <button type="button" className="card-button" onClick={() => this.props.removePost(this.props.id)}>Remove Post</button> : null} 
            </div>
            <div className="comments-container">
                <div>
                    <form onSubmit={(e) => this.handleCommentSubmit(e,this.props.id,comment)} className="post-form">
                    <input className="comment-input"  placeholder="Write a comment" type="text" value={this.state.comment} name="comment" onChange={this.handleComment}/>
                    <button type="submit" className="comment-button">Comment</button>
                    </form>
                </div>
                {comments ? comments.map((element,index) => <Comment removeComment={this.removeComment} key={element + index} id={this.props.id} ind={index} comment={element} role={this.props.role} />  ) : null }
            </div>
            </div>
        )
    }
}

export default Card
