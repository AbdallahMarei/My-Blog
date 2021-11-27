import React from 'react'
import "./admin-input.styles.css";

class AdminInput extends React.Component {
    constructor(props){
        super(props);

        this.state={
            title: "",
            desc: ""
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value})
    }
    render() {
        const post = this.state
        return (
            <div>
                <form onSubmit={(e) => this.props.handlePostSubmit(e,post)} className="post-form">
                    <input className="post-input" placeholder="Write a title" type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
                    <input className="post-input" placeholder="Write a description" type="text" value={this.state.desc} name="desc" onChange={this.handleChange}/>
                    <button className="post-button" type="submit">Post</button>
                </form>
            </div>
        )
    }
}

export default AdminInput
