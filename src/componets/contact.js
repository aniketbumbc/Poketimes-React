import React from 'react';
const contact = (props) => {
    setTimeout(()=>{
        props.history.push('/about')
    },3000);
    return(
        <div className="container">
        <h4 className="center"> Contact </h4>
        <p> You'll notice that there are two sets of the files. The min means that the file is "compressed" to reduce load times. These minified files are usually used in production while it is better to use the unminified files during development.</p>
    </div>

    )
}

export default contact;