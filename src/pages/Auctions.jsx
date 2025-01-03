import React from "react";
import AuctionCard from "../components/AuctionCard";

function Auctions() {
    const [auctions, setAuctions] = React.useState([])

    React.useEffect(() => {
        fetch("http://127.0.0.1:8000/auctions")
        .then(res => res.json())
        .then(data => setAuctions(data))
    }, [])

    const auctionList = auctions.map(auction => 
        <AuctionCard 
            key={auction.auction_id}
            name={auction.name}
            start_date={auction.start_date}
            end_date={auction.end_date}
            details={auction.details}
        />
    )

    return (
        <div className="auctionContainer">
            {auctionList}
        </div>
    )
}


export default Auctions;