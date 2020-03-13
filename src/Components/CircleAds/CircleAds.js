import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './CircleAds.css';

class CircleAds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adwords: this.props.adwords,
            data: ["Subaru", "The Bachelor", "Coca-Cola", "Home Cooking", "CNN", "Men's Health Products", "Information School", "Home Cooking"]
        }
    }

    appCircles(data) {
      return setTimeout(function() {
        var app = {
          count : 8,
          el : {
            self : document.getElementById('wrap'),
            width : document.getElementById('wrap').clientWidth,
            height: document.getElementById('wrap').clientHeight 
          },
          circle : {
            radius : ( document.getElementById('wrap').clientWidth / 3 ) - 100,
            centerX : ( document.getElementById('wrap').clientWidth / 3 ),
            centerY : ( document.getElementById('wrap').clientHeight / 3 ),
          },
          methods : { 
            circle : function(radius, steps, centerX, centerY) {
              var xValues = [centerX];
              var yValues = [centerY];
              for (var i = 0; i < steps; i++) {
                  xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
                  yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
              }
        
              return [xValues, yValues];
            }
          }
        }

        var coords = app.methods.circle(app.circle.radius, app.count, app.circle.centerX, app.circle.centerY);

        for ( var i=0; i<app.count; i++ ) {
          var x = coords[0][i],
              y = coords[1][i];
        
        
          var div = document.createElement('div')
              div.style.left = (x-25) + 'px';
              div.style.top = (y-25) + 'px';
              div.innerHTML = data[i];
              // div.style.display = "inline";

          /* 
          this.state.data.map(word) {
            let p = document.createElement('p');
            p.innerText(word);  
            div.appendChild(p); 
          }
          let p = document.createElement('p'); 
          */ 
         
          app.el.self.appendChild(div)
        }
        return app;
      }, 1);
      
    }

    render() {
    this.appCircles(this.state.data);

        return (
          <div id='wrap'></div>

        )
    }
}

export default CircleAds;