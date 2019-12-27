import React from 'react';

const rainbow = (WrappedComponent) =>{


const colors = ['red','pink','blue','green','yellow','black'];
const randColor = colors[Math.floor (Math.random()*5)];
const className = randColor + '-text';

return (props) =>{
    return(
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}
}
export default rainbow;