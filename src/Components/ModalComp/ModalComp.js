import React from 'react';
import './Styles/ModalComp.css';  
import { Link } from 'react-router-dom';
import DataInstructions from '../DataInstructions/DataInstructions.js'; 

class ModalComp extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            show: this.props.display 
        }

        this.closeModal = this.closeModal.bind(this); 
    }

    closeModal() {
        this.props.onExitClicked(false); 
    }

    render() {
      return (
        <div id="ModalComp" style={{visibility:this.state.show}}>
            <div id="ModalComp_content"> 
                <span class="close" onClick={this.closeModal}>&times;</span>
                <DataInstructions/> 
            </div>
        </div>
      );
    }
  }

export default ModalComp; 