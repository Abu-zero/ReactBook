import {useState, useEffect}  from "react";
import React from "react";

const Searchbar = (props) =>{
    const [query,setQuery] = useState("");

    useEffect(() => {
        props.func(query);
    });

    function handleKeyDown(e){
        setQuery(e.target.value.turkishToLower());
        // if (e.key === 'Enter') {
        //     setQuery(e.target.value.turkishToLower());
        // }
    }

    // function submitQuery(e){
    //     e.preventDefault();
    //     //e.target.children[0].value="";
    // }

    return(
        <input className="search-input" type="text" onChange={handleKeyDown} placeholder="Ürün Ara..."></input>
    )
}

export default Searchbar;