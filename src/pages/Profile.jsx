import Navbar from "../components/Navbar";
import UserContext from "../UserContext";
import { useContext } from "react";

function Profile() {
    const [user, setUser] = useContext(UserContext)
    return (
        <>
            <Navbar />
            <h1> Welcome {user.username} </h1>
            <br/>
            <span>Email: {user.email}</span>
            <br/>
            <span>Name: {user.first_name} {user.last_name}</span>
        </>
    )
}

export default Profile;