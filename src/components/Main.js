import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./Data";


let hornedData = data.map(element => 
    <HornedBeast 
        key = {element._id}
        title = {element.title}
        img = {element.image_url}
        description = {element.description}
    /> 
);

class Main extends React.Component {
    render(){
        return(
            hornedData
        )
    }
}

export default Main;
