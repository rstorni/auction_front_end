import React from "react";
import ArtworkCard from "./ArtworkCard";
import api from "../api";

function ListArtworks({ triggerRefresh }) {
    const [artworks, setArtworks] = React.useState([])

    const fetchArtworks = (async () => {
        try{
            const response = await api.get("/artworks")
            setArtworks(response.data)
        } catch(error) {
            console.error("Error fetching artworks", error)
        }
    })

    React.useEffect(() => {
        fetchArtworks()
    }, [triggerRefresh])

    const artworkList = artworks.map(artwork => 
        <ArtworkCard 
            key={artwork.artwork_id}
            title={artwork.title}
            artist={artwork.artist}
            medium={artwork.medium}
            details={artwork.details}
            date={artwork.fabricated_date}
        />
    )

    return (
        <div>
            {artworkList}
        </div>
    )

}

export default ListArtworks;