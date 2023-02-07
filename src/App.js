import "./App.css";
import logo from "./images/icon-star.svg";
import Notation_scale from "./Notation_scale";
function App() {
  return (
    <div className="card_rating">
        
        <div className="all_element_card">

          <div className="background_logo">
            <img className="logo_star" src={logo} alt="fdsfsd" />
          </div>
          <div className="titre">
          How did we do?
          </div>
          <div className="sous_titre">
          Please let us know how we did with your support request. All feedback is appreciated to help us
improve our offering!
          </div>
          <div className="notation">
            <Notation_scale />
            </div>
        </div>
    </div>
  );
}

export default App;
