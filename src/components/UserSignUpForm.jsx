
import React from "react"
import api from "../api"

function UserSignUpForm({ onSignup }) {

    async function createUserAPI(formData) {
        try{
            const response = await api.post("/create_user", 
                { 
                    username: formData.get("username"),
                    password: formData.get("password"),
                    first_name: formData.get("firstName"),
                    last_name: formData.get("lastName"),
                    email: formData.get("email"),
                    is_active: true
                }
            )
            if (onSignup) {
                onSignup()
            }
        } catch (error) {
            console.error("Error posting user", error);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        createUserAPI(formData)
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