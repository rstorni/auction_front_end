

export default function UserSignUpForm() {
    return (

        <form className="signup-form">
            <h1>Register:</h1>
            <label htmlFor="">Username:</label>
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