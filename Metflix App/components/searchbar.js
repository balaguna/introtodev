import { func } from 'prop-types';
import react from 'react';

function Search ({handleInput, searchbar}) {

    return (
    <section className= "searchbox-wrap">
        <input type= "text"
        placeholder="...BAT ER' UP!"
        className= "searchbox"
        onChange= {handleInput}/>
         </section>

    )
}
export default MetFlix;

