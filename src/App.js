import React from "react"
import {BrowserRouter as Router, Switch,Route,Redirect} from "react-router-dom"
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/home-page/home-page.component";
import SignIn from "./pages/sign-in/sign-in.component";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      role: 0,
      userName: "",
      users: [{firstName: "Abdallah",email:"abdullahmari@gmail.com",password:"123456"}],
      isLoggedIn: false,
    }

  }
  
  addToUsers = (user) => {
    const newUser = this.state.users
    newUser.push(user)
    this.setState({users: newUser})
  }

  checkUsers= (first,email,pass) => {
    let name = false
    let arrayLoop = this.state.users
     arrayLoop.forEach(user =>{
        if(user.firstName === first.trim() && user.email === email.trim() && user.password === pass.trim()){
        name = user.firstName;
        } 
     })
     console.log(name)
     if(name && name !== "Abdallah") {
        alert(`Hello ${name}`) 
        this.setState({userName: name, role:0, isLoggedIn: true})
     } else if (name === "Abdallah"){
        alert(`Hello ${name}`) 
        this.setState({userName: name, role:1,isLoggedIn: true})
     } else alert(`No user found`)
      
  }
  removePost = (ind) => {
    let removeArray = JSON.parse(localStorage.getItem("posts"))
    let newArray = removeArray.filter((element,index) => {
        return (element.title+index)!==ind
    })
    localStorage.setItem("posts", JSON.stringify(newArray));
    let removeLikes = JSON.parse(localStorage.getItem(`${ind} counter`))
    if(removeLikes){
      localStorage.removeItem(`${ind} counter`)
    }
    this.setState({})
}

  signInAndSignOut = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  handlePostSubmit = (e,post) => {
    e.preventDefault();
    const postArray = [post];
    if(!localStorage.getItem("posts")){
      localStorage.setItem("posts", JSON.stringify(postArray))
      this.setState({})
    } else {
      const postsLocal = JSON.parse(localStorage.getItem("posts"))
      postsLocal.unshift(post)
      localStorage.setItem("posts", JSON.stringify(postsLocal))
      this.setState({})
    }
    // postArray.push(post);
    // this.setState({posts: postArray})
    // console.log(this.state.posts)
  }

  render(){
    const {users,isLoggedIn,role,userName} = this.state;
    return (
      <Router>
        <Header signInAndSignOut={this.signInAndSignOut} isLoggedIn={isLoggedIn}/>
        <Switch>
          <Route exact path="/" >
            <HomePage isLoggedIn={isLoggedIn} role={role} handlePostSubmit={this.handlePostSubmit} removePost={this.removePost} user={userName}/>
          </Route>
          <Route exact path="/signin" render={() => isLoggedIn ? (<Redirect to="/" />) : (<SignIn users={users} addUser={this.addToUsers} check={this.checkUsers}/>)}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
