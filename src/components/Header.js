import Logo from './assets/vinted-logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const handleClick = () => {
		return (
			alert("cliqué")
		);
	}
  return (
    <nav>

      <div className="Logo">
        <Link to="/">
        <img src={Logo} alt="vinted-logo" />
        </Link>
      </div>

      <div className="search-product"> 
          <FontAwesomeIcon icon={faSearch} className="icon-faSearch"/>
          <input
            placeholder="search for product"
            type="text"
            name="search-for"
            //  value={search}
            //  onChange={handleSearchFor}
          />
      </div>
      
      <div className="buttons-log">
        <Link to="/Login">
          <button 
            className="Login" 
            onClick={handleClick}
          >
            Log in 
          </button>
        </Link>
        <Link to="/Signup">
          <button 
            className="Signup" 
            onClick={handleClick}
          >
            Signup
          </button>
        </Link>
      </div>
    
      <div>
        <button 
          className="buy-your-clothers" 
          onClick={handleClick}
        >
          Buy your clothers
        </button>
      </div>
      <div>
        <Link to="/Offer">OFFER</Link>
      </div>
    </nav>
  );
}

export default Header;