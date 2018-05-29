import React from "react";

function BusinessList(props) {
    return (
        <div>
        {props.business.map(b => 
        <Business key={b.id} 
        name={b.name} 
        adress={b.adress} 
        city={b.city}
        /> )}
        </div>
    );
}
export default BusinessList;

function Business(props) {
    return (
        <div>
        <div className="Wrapper">
            <button>{props.name}</button>    
            {props.adress}
            {props.city}
        </div>
        <br/>
        </div>
    );
}
