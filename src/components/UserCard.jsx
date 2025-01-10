function UserCard(props) {
    return (
        <div className="userCard">
            <h1>{props.firstName} {props.lastName}</h1>
            <span>Username: {props.username}</span>
            <span>Email: {props.email}</span>
            <span>IsActive: {props.active ? "true" : "false"}</span>
        </div>
    )
}

export default UserCard;

