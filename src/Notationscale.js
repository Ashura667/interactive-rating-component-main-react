import "./Notationscale.css";
import {useState} from "react";
function Notationscale() {
  const [nombre, setnombre] = useState([{num:1, selected:false, id: "numero1"},
    {num:2, selected:false, id: "numero2"},
    {num:3, selected:false, id: "numero3"},
    {num:4, selected:false, id: "numero4"},
    {num:5, selected:false, id: "numero5"}]);

  const [state, setState] = useState(0);

  return (<section className="etst">
    {nombre.map((item) => {
      return(<div id={item.id} onClick={() => {setnombre(item.selected =true);
        var iddoc = document.getElementById(item.id);
        if (item.selected ===true)
        {
          
          iddoc.style.backgroundColor = "orange";

          setState(item)

        }
        else {


        }
        }} className="notation_number">{item.num}</div>)} )}
  </section>)
}
export default Notationscale;
