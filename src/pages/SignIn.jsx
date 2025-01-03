import Navbar from "../components/Navbar";
import SignInForm from "../components/UserSignInForm";

function SignIn() {
    return (
        <>
            <Navbar />
            <h1> Sign In:</h1>
            <SignInForm />
        </>
    )
}

export default SignIn;