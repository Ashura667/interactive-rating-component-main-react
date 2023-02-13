import "./Notationscale.css";
import {useState} from "react";
function Notationscale() {
  const [nombre, setnombre] = useState([{num:1, selected:false, id: "numero1"},
    {num:2, selected:false, id: "numero2"},
    {num:3, selected:false, id: "numero3"},
    {num:4, selected:false, id: "numero4"},
    {num:5, selected:false, id: "numero5"}]);

    const handleClick = (e) => {
        const id = e.target.id;
        const newNombre = [...nombre];
        newNombre.forEach((item) => {
            if (item.id === id) {
                item.selected = !item.selected;
            } else {
                item.selected = false;
            }
        });
        setnombre(newNombre);
    }
  return <section className="entire_block_rating_number">
    {nombre.map((item) => { return(
      <div id={item.id} onClick={handleClick} className={item.selected ? "selected" : "notation_number"}>
              {item.num}
        </div>)})}
  </section>
}
export default Notationscale;
