import Navbar from "../components/Navbar";
import UserSignUpForm from "../components/UserSignUpForm";
import ListUsers from "../components/ListUsers";

function Register() {
    return (
        <>
            <Navbar />
            <UserSignUpForm />
            <ListUsers />
        </>
    )
}

export default Register