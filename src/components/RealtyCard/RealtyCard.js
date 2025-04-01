import './style.css';
import location from './Location.png';
import bath from './cil_bath.png';
import bed from './fluent_bed-20-regular.png'

function RealtyCard() {
  return (
    <div className="RealtyCard">
      <img src="../assets/images/card_1.png" alt="Property 1" className="realty-img"/>
      <div className="card-content">
         <div className="location">
            <img src={location} alt="location-ic" className="location-icon"/>
            <div className="location-text">Зелёный Луг, Минск.</div>
         </div>
         <div className="details">
            <div className="bedrooms">
              <img src={bed} alt="bed-ic" className="details-icon"/>
              <div className="details-text">1 Спальня</div>
            </div>
            <div className="bath">
              <img src={bath} alt="bath-ic" className="details-icon"/>
              <div className="details-text">1 Ванна</div>
            </div>
            <div className="square">
              <div className="details-text">535 кв. м.</div>
            </div>
         </div>
      </div>
    </div>
 );
}
  
  export default RealtyCard;