import React from "react"
import NavBar from "../components/NavBar"
import User from "./User"
  
  
export function ListUsers(){
    const [userData, setUserData] = React.useState([{}])

    React.useEffect(() => {
        fetch("http://127.0.0.1:8000/users")
        .then(res => res.json())
        .then(data => setUserData(data))
    }, [])

    const display = userData.map(data => 
        <User 
            key={data.id}
            firstName={data.first_name}
            lastName={data.last_name}
            username={data.username}
            email={data.email}
            active={data.is_active}
        />
    )

    return (
        {display}
    )

}
