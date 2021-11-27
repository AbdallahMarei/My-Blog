import React from 'react'
import "./sign-up.styles.css"

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            lastName: "",
            firstName: "",
            email: "",
            password: "",
            confirmPassword: "",
            submitted: false,
            isValid: false
        }
    }

    handleChange = (e) => {
        const {firstName, lastName,email,password,confirmPassword} = this.state;
        const {name, value} = e.target;
        this.setState({[name]:value})
        if(firstName.length < 4  || lastName.length < 4 || email || password.length < 4 || password !== confirmPassword){
            this.setState({isValid: false})
        }
    }
    

    handleSubmit = (e) => {
        const {firstName, lastName,email,password,confirmPassword} = this.state;
        e.preventDefault();
        this.setState({
            submitted: true
        })
        if(firstName.length > 4  && lastName.length > 4 && email && password.length > 4 && password === confirmPassword){
            this.setState({isValid: true})
            alert("Your account has been created now please sign in")
            const newAccount = this.state;
            this.props.addUser(newAccount);
            console.log(this.props.users)
            this.setState({
                lastName: "",
                firstName: "",
                email: "",
                password: "",
                confirmPassword: "",
                submitted: false,
                isValid: false
            })
        }
    }
    render(){
        const {firstName, lastName,email,submitted,password,confirmPassword,isValid} = this.state;
        return(
            <div className="form-container">
                <h1 className="sign-heading">Please Sign Up First</h1>
            <form onSubmit={this.handleSubmit}>
                {isValid ? <div className="success-message">Success! Thank you for registering {firstName}</div> : null}

                <input onChange={this.handleChange} value={firstName} placeholder="First Name" name="firstName" type="text" />
                {submitted && (firstName.length <= 4 || !firstName) ? <span className="message">Please enter a first name with length of 4 characters or more</span> : null}

                <input onChange={this.handleChange} value={lastName} placeholder="Last Name" type="text" name="lastName" />
                {(submitted && (lastName.length<=4 || !lastName)) ? <span className="message">Please enter a last name with length of 4</span> : null}

                <input onChange={this.handleChange} value={email} placeholder="Email" type="email" name="email" />
                {(submitted && !email) ? <span className="message">Please enter an email name</span> : null}

                <input onChange={this.handleChange} value={password} placeholder="Password" type="password" name="password" />
                {(submitted && (password.length <= 4 || !password)) ? <span className="message">Please enter a password with length of 4</span> : null}

                <input onChange={this.handleChange} value={confirmPassword} placeholder="Confirm Password" type="password" name="confirmPassword" />
                {(submitted && (!confirmPassword || password !== confirmPassword)) ? <span className="message">Please make sure the passwords match</span> : null}

                <button type="submit">Register</button>
            </form>
        </div>
        )
    }

}

export default SignUp
