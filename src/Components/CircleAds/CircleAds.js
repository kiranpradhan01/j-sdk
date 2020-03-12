import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './CircleAds.css';

class CircleAds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    /* assuming list of adwords is in csv
    componentDidMount() {
        d3.csv('data/adwords.csv', (err, data) => {
            this.setState({
                data: data
            })
        })
    }*/

    render() {
        return (
            <div class="circle-container">
              {/* <svg height="110" width="110"> 
                <circle cx="50" cy="55" r="45" fill="#d8d8d8">
                <text textAnchor="middle" x="250" y="55">Circle Text</text></circle>
              </svg>
              <svg height="110" width="110"> 
                <circle cx="50" cy="55" r="45" fill="#d8d8d8" strokeWidth="4">
                <FontAwesomeIcon icon={faUserCircle} /></circle>
              </svg> */}

            
              <FontAwesomeIcon class="user" icon={faUserCircle} size="3x"/>

              <div class="circle deg0">
              <div class="circle_inner">
                <div class="circle_wrapper">
                <div class="circle_content">Subaru</div>
                </div>
              </div>
              </div>

              <div class="circle deg45">
              <div class="circle_inner">
                <div class="circle_wrapper">
                <div class="circle_content">A circle with a lot more text inside</div>
                </div>
              </div>
              </div>

              <div class="circle deg135">
              <div class="circle_inner">
                <div class="circle_wrapper">
                <div class="circle_content">Deg135</div>
                </div>
              </div>
              </div>

              <div class="circle deg180">
              <div class="circle_inner">
                <div class="circle_wrapper">
                <div class="circle_content">Deg180</div>
                </div>
              </div>
              </div>

              <div class="circle deg225">
              <div class="circle_inner">
                <div class="circle_wrapper">
                <div class="circle_content">Deg225</div>
                </div>
              </div>
              </div>

              <div class="circle deg315">
              <div class="circle_inner">
                <div class="circle_wrapper">
                <div class="circle_content">Deg315</div>
                </div>
              </div>
              </div>

            </div>

            /*<div className="container">
                {this.state.data.map((adword, i) => {
                    return(
                    <div class="circle">
                    <div class="circle_inner">
                        <div class="circle_wrapper">
                        <div class="circle_content">{adword}</div>
                        </div>
                        </div>
                    </div>
                    </div>)
                })}
            </div>*/
        )
    }
}

export default CircleAds;