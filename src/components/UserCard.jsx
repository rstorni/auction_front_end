function UserCard(props) {
    return (
        <div className="card user-card">
            <img src="https://www.whoi.edu/wp-content/uploads/2019/01/alvinhistory_21887.jpg"/>
            <h1>{props.firstName} {props.lastName}</h1>
            <span>Username: {props.username}</span>
            <span>Email: {props.email}</span>
            <span>IsActive: {props.active ? "true" : "false"}</span>
        </div>
    )
}

export default UserCard;

