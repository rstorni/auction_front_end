import React from "react";
import Navbar from "../components/Navbar";
import UserSignUpForm from "../components/UserSignUpForm";
import ListUsers from "../components/ListUsers";

function Register() {

    const [trigger, setTrigger] = React.useState(true)

    function handleSignUp() {
        setTrigger(prev => !prev)
    }

    return (
        <>
            <Navbar />
            <UserSignUpForm onSignup={handleSignUp}/>
            <ListUsers refreshTrigger={trigger}/>
        </>
    )
}

export default Register