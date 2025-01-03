import Navbar from "../components/Navbar";
import ListAuctions from "../components/ListAuctions";

function Auctions() {
    return (
        <>
            <Navbar />
            <h1> All Auctions: </h1>
            <ListAuctions />
        </>
    )
}

export default Auctions;