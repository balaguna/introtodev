
import react from 'react';
import result from ./result:

function Results ({results}) {
return (
    <section className = "results">
        {results.map(resul => (
            <Result result={result} />
        ))}
    </section> 
)

    )
}

export default Results