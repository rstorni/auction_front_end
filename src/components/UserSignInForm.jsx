function UserSignInForm() {
    return (
        <form>
            <label htmlFor="signInEmail">Email</label>
            <input name="signInEmail" type="email"></input>

            <label htmlFor="signInPassword">Password</label>
            <input name="signInPassword" type="pasword"></input>

            <button>Sign In</button>
        </form>
    )
}

export default UserSignInForm;