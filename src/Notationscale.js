import "./Notationscale.css";
import {useState} from "react";
var selected = null
function Notationscale() {
  let numbers = [1,2,3,4,5];
  const [state, setState] = useState(0);

  return (<section className="etst">
    {numbers.map((item) => {
      var test = 'numero'+item
      return(<div id={test} onClick={() => {console.log(test);
        var iddoc = document.getElementById(test);
        if (selected ==null)
        {
          iddoc.style.backgroundColor = "orange";
          selected = test;
          setState(item)
        }
        else {
          var iddoc2 = document.getElementById(selected);
          iddoc2.style.backgroundColor= "hsl(213, 19%, 18%)";

          iddoc.style.backgroundColor = "orange";
          selected = test;
          setState(item)

        }
        }} className="notation_number">{item}</div>)} )}
    <button onClick={() => {if (state !==0)
    {
      console.log(state)
    }
    }} >SUBMIT</button>
  </section>)
}
export default Notationscale;
