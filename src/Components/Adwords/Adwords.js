import React from 'react';
import './Styles/Adwords.css'; 

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class Adwords extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
          adwords: this.props.adwords 
        }
        this.onClickHandler = this.onClickHandler.bind(this); 
    }
    
    onClickHandler = (e) => {
        console.log(e.target.innerText);
        this.props.onAdwordClicked(2, e.target.innerText);
    }
    render() {
      return (
        <div id="SMLessonPage_adwords">
          <div id="SMLessonPage_adwords_left">
                <div id="SMLessonPage_adwords_header"> 
                    <p> Let’s find a topic that you’re not interested it: </p>
                </div>
                <div id="SMLessonPage_adwords_paraText"> 
                    <p> 
                    Creating an ad campaign can be easy, even for topics/demographics that you might not be 
                    familiar with yourself.
                    Here are some ad words that Facebook uses when it comes to finding interests for users.
                    
                    <span> Pick a card, any card. </span>
                    </p>
                </div>
            </div>

            <div id="SMLessonPage_adwords_right">  
                    {this.state.adwords.map(adword => (
                    <p onClick={this.onClickHandler} className="SMLessonPage_adwords_words_word">
                        {adword}
                    </p>
                    ))}
            </div>
        </div>
      );
    }
  }

export default Adwords;