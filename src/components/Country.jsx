import React from 'react'

import "./Country.css"
import { toast } from 'react-toastify'; 

const Country = (props) => {
    const notify = () => toast(`${countryName.common} is deleted`);
    const {onRemoveCountry } = props;
    const {name : countryName, flags, capital, population,area} = props.country;
    const handleRemove = () => {
      onRemoveCountry(countryName.common);
    };
   
  return (
    <article>
    <div className='country'>
      <img className='flag' src={flags.png} alt={countryName.common} />
      <h2>Name : {countryName.common}</h2>
      <h3>Population : {population}</h3>
      <h3>Capital : {capital}</h3>
      <h3>Area : {area}</h3>
      <button onClick={()=>{handleRemove();  notify()}}  className='btn'>Remove Country</button>
    </div>
    </article>
    
  )
}

export default Country
