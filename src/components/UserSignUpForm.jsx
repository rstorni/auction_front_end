
import React from "react"
import api from "../api"

function UserSignUpForm() {
    const [user, setUser] = React.useState({})

    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)

        const email = formData.get("email")
        const username = formData.get("username")
        const firstname = formData.get("firstName")
        const lastname = formData.get("lastName")
        const password = formData.get("password")
        

        try{
            const response = api.post("/create_user", 
                { 
                    username: username,
                    password: password,
                    first_name: firstname,
                    last_name: lastname,
                    email: email,
                    is_active: true
                }
            )
            console.log('user added')
            setUser(response)
        } catch (error) {
            console.error("Error posting user", error);
        }
    

        formEl.reset()
    }

    return (

        <form onSubmit={handleSubmit} method="post" className="signup-form">
            <h1>Register:</h1>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                name="username" 
                placeholder="Storni" 
                required
            />

            <label htmlFor="email">Email:</label>
            <input 
                id="email"
                name="email" 
                placeholder="martin@storni.com"
                type="email"
                required
            />


            <label htmlFor="firstName">First Name:</label>
            <input 
                id="firstName"
                name="firstName" 
                placeholder="Martin"
                required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input 
                id="lastName"
                name="lastName" 
                placeholder="Storni"
                required
            />

            <label htmlFor="password">Password:</label>
            <input 
                id="password"
                name="password" 
                type="password"
                required
            />


            <button>Submit</button>
        </form>
    )
}

export default UserSignUpForm