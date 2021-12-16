import React,{useState} from 'react'
import "./admin-input.styles.css";

const AdminInput = ({handlePostSubmit}) =>  {
    const [post,setPost] = useState({
        title: "",
        desc: "",
        likes: []
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost({...post,[name]:value})
    }
        return (
            <div>
                <form onSubmit={(e) => handlePostSubmit(e,post)} className="post-form">
                    <input className="post-input" placeholder="Write a title" type="text" value={post.title} name="title" onChange={handleChange}/>
                    <input className="post-input" placeholder="Write a description" type="text" value={post.desc} name="desc" onChange={handleChange}/>
                    <button className="post-button" type="submit">Post</button>
                </form>
            </div>
        )
   
}

export default AdminInput
