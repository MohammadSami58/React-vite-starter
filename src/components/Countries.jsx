import React from 'react'

import "./Countries.css";
import Country from './Country';
import {v4 as uuidv4} from "uuid";
const Countries = (props) => {
  const { onRemoveCountry } = props;
  return (
   <section className='countries'>
    {props.countries.map((country)=>{
       
        return <Country country={country} key={uuidv4()} onRemoveCountry={onRemoveCountry}/>
    })}
   </section>
  )
}

export default Countries
