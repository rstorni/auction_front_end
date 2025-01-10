function ArtworkCard(props){
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <span>Artist: {props.artist}</span>
            <span>Medium: {props.medium}</span>
            <span>Details: {props.details}</span>
            <span>Date: {props.date}</span>
        </div>
    )
}

export default ArtworkCard;