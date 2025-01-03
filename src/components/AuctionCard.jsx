function AuctionCard(props) {
    return (
        <div className="auctionCard">
            <h1>{props.name}</h1>
            <span>Dates: {props.start_date} - {props.end_date}</span>
            <p>Details: {props.details}</p>
        </div>
    )
}

export default AuctionCard;