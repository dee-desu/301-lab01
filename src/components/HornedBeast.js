import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            voteCount : ""
        }
    }

    increaseVotes = () => {
        this.setState({
            voteCount : this.state.voteCount + "🌠"
        })
    }

    render() {
        return(
            // <div className="hedoro-card">
            // <h2 className="horned-title">{this.props.title}</h2>
            // <img className="horned-pic" src={this.props.img} alt={this.props.title} title={this.props.title} />
            // <p className="beast-description">{this.props.description}</p>
            // </div>
            <Card style={{ width: '290px' }} className="hedoro-card">
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img} onClick={this.increaseVotes}/>
              <Card.Text className="info">
              {this.props.description}
              </Card.Text>
              <Card.Text className="vote">
              Votes
              </Card.Text>
              <Card.Text>
              {this.state.voteCount}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default HornedBeast;
