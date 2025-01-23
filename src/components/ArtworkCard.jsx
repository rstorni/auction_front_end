import "../css/card.css"
import "../css/artwork-card.css"


function ArtworkCard(props){
    return (
        <div className="card artwork-card">
            <img src="https://www.whoi.edu/wp-content/uploads/2019/01/alvinhistory_21887.jpg"/>
            <h1>Title: {props.title}</h1>
            <span>Artist: {props.artist}</span>
            <span>Medium: {props.medium}</span>
            <span>Details: {props.details}</span>
            <span>Date: {props.date}</span>
        </div>
    )
}

export default ArtworkCard;