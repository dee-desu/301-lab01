import React from "react";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from "./Data";
import SelectedBeast from "./selectedBeast";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show : false
        }
    }

    showModal = () => {
        this.setState({
            show: !(this.state.show)
        })
    }


    modalGetData = (key) => key;

    render() {
        return(
            <div>
                <Header />
                <div className="card">   
                    <Main 
                        data={data}
                        showModalCard={this.showModal}
                        toGetData={this.modalGetData}
                    />
                    <SelectedBeast 
                        show={this.state.show} 
                        hideCard={this.showModal}
                     
                    />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;