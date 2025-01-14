import "../css/form-containter.css"
import api from "../api";

function LotCreateForm(props) {

    async function createLotAPI(formData) {
        try{
            const response = api.post("/create_lot", 
                {
                    auction_id: formData.get("auctionID"),
                    artwork_id: formData.get("artworkID"),
                    low_estimate_price: formData.get("lowEstimate"),
                    high_estimate_price: formData.get("highEstimate")
                }
            )
        } catch (error) {
            console.error("error in creating lot", error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        createLotAPI(formData)
        formElement.reset()
    }

    return (
        <form onSubmit={handleSubmit} method="post" className="form-container">
            <label htmlFor="auctionID" hidden={true}></label>
            <input
                hidden={true}
                id="auctionID"
                name="auctionID" 
                defaultValue={props.auctionId}
                required 
            />

            <label htmlFor="artworkID">Artwork ID</label>
            <input
                id="artworkID"
                name="artworkID" 
                required 
            />

            <label htmlFor="lowEstimate">low estimate</label>
            <input
                id="lowEstimate"
                name="lowEstimate" 
                required             
            />

            <label htmlFor="highEstimate">high estimate</label>
            <input
                id="highEstimate"
                name="highEstimate" 
                required             
            />      

            <button>Submit</button>  
        </form>
    )
}

export default LotCreateForm;