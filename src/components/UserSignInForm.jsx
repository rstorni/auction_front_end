import React from "react";
import { useContext } from "react";
import "../css/form-containter.css"
import api from "../api";
import UserContext from "../UserContext";


function UserSignInForm() {

    const [allUsers, setAllUsers] = React.useState([])
    const [user, setUser] = React.useContext(UserContext)

    async function fetchUsers() {
        try{
            const response = await api.get("/users")
            setAllUsers(response.data)
        } catch (error) {
            console.error("Error in getting users for varification", error)
        }
    }
    
    function verifyUser(email, password) {
        // Implement logic once we learn how to do a for loop
        // For now we will return true and pass my user info

        for (const user of allUsers) {
            if (user.email === email && user.password === password) {
                console.log("User is verified");
                return user;
            }
        }

        console.log("user provided does not exist")
        return null
    }

    async function submitHandeler (event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)

        const loginUser = verifyUser(
            formData.get("signInEmail"),
            formData.get("signInPassword")
        );

        if (loginUser) {
            console.log(loginUser)
            setUser(loginUser);
        } else {
            setError("Invalid email or password. Please try again.");
        }

        formEl.reset()
    }

    React.useEffect( () => {
        fetchUsers()
        
        console.log(user)
    }, [user])

    return (
        <form onSubmit={submitHandeler} className="form-container" method="post">
            <label htmlFor="signInEmail">Email</label>
            <input 
                id="signInEmail"
                name="signInEmail" 
                type="email"
            />

            <label htmlFor="signInPassword">Password</label>
            <input 
                id="signInPassword"
                name="signInPassword" 
                type="password"
            />

            <button>Sign In</button>
        </form>
    )
}

export default UserSignInForm;