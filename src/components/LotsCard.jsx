import React from "react";
import api from "../api";

function LotsCard(props) {

    const [artwork, setArtwork] = React.useState({})

    async function fetchArtworkDetails() {
        try{
            const artworkDetails = await api.get(`/artwork/${props.artwork_id}`)
            setArtwork(artworkDetails.data)
        } catch (error){
            console.error("error fetching artwork details", error)
        }
    }

    React.useEffect(() => {
        fetchArtworkDetails()
    }, [])

    return (
        <>
            <h1>{artwork.title}</h1>
            <span>{props.low_estimate_price} - {props.high_estimate_price}</span>
        </>
    )
}

export default LotsCard;

