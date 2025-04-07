import './style.css';
import location from './Location.png';
import bath from './cil_bath.png';
import bed from './fluent_bed-20-regular.png'

export const RealtyCard=({imageSrc, locationText, bedText, bathText, squareText})=> {
  return (
    <div className="RealtyCard">
      <img src={imageSrc} alt="realty-img" className="realty-img"/>
      <div className="card-content">
         <div className="location">
            <img src={location} alt="location-ic" className="location-icon"/>
            <div className="location-text">{locationText}</div>
         </div>
         <div className="details">
            <div className="bedrooms">
              <img src={bed} alt="bed-ic" className="details-icon"/>
              <div className="details-text">{bedText}</div>
            </div>
            <div className="bath">
              <img src={bath} alt="bath-ic" className="details-icon"/>
              <div className="details-text">{bathText}</div>
            </div>
            <div className="square">
              <div className="details-text">{squareText}</div>
            </div>
         </div>
      </div>
    </div>
 );
}
