// import du package axios
import axios from "axios";
import { useState, useEffect } from "react";

// A tester !!!
// 
// 
// 
// 

function Offers () {
  const [offers, setOffers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers/");
        console.log(response.data);
        setOffers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

return isLoading ? (
  <span>En cours de chargement...</span>
) : (
    <div className="offers" key={offers}>
      {offers.offers.map((offer, index) => {
        return(  
        <div key={index}>
          <p>nous sommes cachés</p>
          <p key={index}>{offer._id}</p>
          <p key={index}>{offer.product_name}</p>
          <p key={index}>{offer.product_description}</p>
          <p key={index}>{offer.product_price}</p>
          <p key={index}>{offer.product_details}</p>
          <p>tu ne nous trouveras pas</p>

          {/* <img key={index} src={offer.product_pictures} alt={offer.product_name} /> */}
          {/* <p>{offer.owner}</p> */}
        </div>);
      })}
    </div>
) 
};
  
export default Offers;


// ---------------------------------------------------
// [offers] = array with [ an object {offer}]
          
  // offer = {1 object with keys}
    // _id = value
    // product_name = value
    // product_description = value
    // product_price = value    
    // product_details = [array {...} ] 
        // {...} =  
        // {marque, taille, etat, couleur, emplacement, modes de paiement}
    // product_pictures = [ {asset_id, public_id, version, ...} ]
    // owner = { { {account} + {_id} } } }
        // account = { {username object} & {avatar {asset_id}} } }  
// ---------------------------------------------------
