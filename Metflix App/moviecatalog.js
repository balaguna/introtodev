import { func } from 'prop-types';
import React , {useState} from 'react';
import search from './components/searchbar.js'
import axios from 'axios'
import results from './components/results.js'
import results2 from './components/results2.js'

function App () {
    const [state, setState] = useState ({
        s: "",
        results: [].
        selected; {}
    });
const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=2e6012ed";

const search = (e) => {
    if (e.key == "Enter")
    axios (apiurl + "&s" + state.s).then(({data})) => {
        let result = data.Search;

        setState(prevState => {
            return {...prevState, results:results}
        })
    } 
}

const handleInput => (e) {
    let s = e.target.value;
setState(...prevState, s:s)

});
    return (
        <div class1= "MetFlix">

            <header class1= "FlixHead">
                <h1>For your New York Mets related Movies</h1>
            </header>
            <main>
                <h5>ten ten, STRIKE AND YOURE OUT!</h5>
                <Search handleInput = {handleInput} search = {searchbar}/>
                <Results results = {state.results} />
            </main>
        </div>
    )
}
export default MetFlix;

