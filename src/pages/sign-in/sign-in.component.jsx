import React from 'react'
import "./sign-in.styles.css"
import SignInForm from '../../components/sign-in/sign-in-form.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignIn = ({users,addUser,check}) => {
    return (
        <div className="forms">
            <SignInForm users={users} check={check}/>
            <SignUp users={users} addUser={addUser}/>
        </div>
    )
}

export default SignIn
