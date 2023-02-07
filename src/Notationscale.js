import "./Notationscale.css";
function Notationscale() {
  let numbers = [1,2,3,4,5];
  return (<section className="etst">
    {numbers.map((item) => {return(<div className="notation_number">{item}</div>)} )}
  </section>)
}
export default Notationscale;
