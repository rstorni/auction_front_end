import "../css/card.css"
import "../css/auction-card.css"

import { Link } from "react-router-dom";

function AuctionCard(props) {
    return (
        <div className="card auction-card">
            <img src="https://www.whoi.edu/wp-content/uploads/2019/01/alvinhistory_21887.jpg"/>
            <h1>
                <Link 
                    to={{
                        pathname: `/Auction/${props.auction_id}`,
                        state: {
                            name: props.name,
                            start_date: props.start_date,
                            end_date: props.end_date,
                            details: props.details,
                        },
                    }}
                > 
                    {props.name}
                </Link>
            </h1>
            <span>Dates: {props.start_date} - {props.end_date}</span>
            <p>Details: {props.details}</p>
        </div>
    )
}

export default AuctionCard;