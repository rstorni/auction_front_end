import React from "react";
import Navbar from "../components/Navbar";
import ListAuctions from "../components/ListAuctions";

function Home() {
    return (
        <>
            <Navbar />
            <ListAuctions numItems={3}/>
            <div className="homeContent">
                <h3 className="homeTitle">Where Art Meets Innovation and Nautical Elegance</h3>
                <p className="homeDescription">
                    At Storni’s, we bring together two extraordinary worlds: the boundless creativity of digital art and the timeless
                    allure of nautical themes. Explore our exclusive collection of artworks that capture the spirit of the sea and the future of artistic expression.
                </p>
                <p className="homeDescription">
                    Whether you’re a seasoned collector or discovering your passion for the first time, our curated auctions promise exceptional finds and unparalleled experiences.
                </p>
                <p className="homeConclusion">
                    <strong>Discover. Bid. Own a Masterpiece.</strong><br/>
                    Start your journey today and let Storni’s be your gateway to inspiration.
                </p>
            </div>
        </>
    )
}

export default Home;