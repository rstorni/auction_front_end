import React from "react"
import UserCard from "./UserCard"
import api from "../api"
  
  
function ListUsers({ refreshTrigger }) {
    const [userData, setUserData] = React.useState([])

    const fetchUsers = (async () => {
        const response = await api.get('/users')
        try{
            setUserData(response.data)
        } catch (error) {
            console.log("there was an error getting users", error)
        }
    })

    React.useEffect(() => {
        fetchUsers() 
    }, [refreshTrigger])

    const display = userData.map(data => 
        <UserCard 
            key={data.id}
            firstName={data.first_name}
            lastName={data.last_name}
            username={data.username}
            email={data.email}
            active={data.is_active}
        />
    )

    return (
        <div>
            {display}
        </div>
    )

}

export default ListUsers;
