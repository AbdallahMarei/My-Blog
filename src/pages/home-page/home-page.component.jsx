import React from 'react'
import "./home-page.styles.css"
import Typical from "react-typical"
import AdminInput from '../../components/admin-input/admin-input.component'
import Card from '../../components/card/card.component'

class HomePage extends React.Component {

    render(){
        const posts = JSON.parse(localStorage.getItem("posts"))
        return (
            <div>
                <div className="home-container" style={{backgroundImage: "url('images/books.png')"}}>
                    <h1>Welcome to My Blog<span><Typical loop={Infinity} steps={[
                        "A Place Where I Share My Thoughts", 1000, "A Place Where You Can Say Whatever", 1000, "A Place Where You Feel Safe", 1000
                    ]}/></span></h1>
                </div>
    
                <section className="about" id="about-section">
                    <h2><strong>About Me</strong></h2>
                    <hr />
                    <div className="about-container">
                        <div className="description">
                            <p>My name is Abdallah Marei and I am a full stack web developer. I graduated from the University of Jordan as a Mechanical Engineer but I realized quickly that it was not for me, that is why I decided to follow my passion and start my career as a developer. Changing my career was the best decision in my life because now work is no longer work it is fun.</p>
                        </div>
                            <div className="profile-picture">
                                <img src="images/abdallah.png" alt="Abdallah Marei"/>
                            </div>
                    </div>
                </section>
                <section className="blog">
                <h1><strong>Blog Posts</strong></h1>
                <hr />
                    {!this.props.isLoggedIn ? <div className="view-blog"><h1>Please Sign In So You Can View My Posts</h1></div> : <div>
                        {this.props.role ? <AdminInput handlePostSubmit={this.props.handlePostSubmit}/> : null}
                        {posts ? posts.map((element,index) => <Card removePost={this.props.removePost} key={element.title + index} id={element.title + index}  post={element} role={this.props.role}/>) : (<p className="no-posts">There are no posts yet</p>) }
                        </div>}
                </section>
            </div>
        )
    }
}

export default HomePage
