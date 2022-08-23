import React from "react";

class HornedBeast extends React.Component {
    render() {
        return(
            <div className="hedoro-card">
            <h2 className="horned-title">{this.props.title}</h2>
            <img className="horned-pic" src={this.props.img} alt={this.props.title} title={this.props.title} />
            <p className="beast-description">{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;
