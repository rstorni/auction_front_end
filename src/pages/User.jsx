export default function User(props) {
    return (
        <div className="user-display">
            <h1>{props.firstName} {props.lastName}</h1>
            <span>Username: {props.username}</span>
            <span>Email: {props.email}</span>
            <span>IsActive: {props.active ? "true" : "false"}</span>
        </div>
    )
}