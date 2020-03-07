import React from 'react';
import './Styles/AdBox.css'; 

// This is the Navigation bar that belongs on the top of the page 
class AdBox extends React.Component {
    constructor(props) {
      super(props); 
        this.state = { 
            tagVal: "",
            tagged: [],
            banner: false,
            post: false,
            video: false
        }
        this.keyPressed = this.keyPressed.bind(this)
        this.onInputBoxChange = this.onInputBoxChange.bind(this)
        this.handleBannerCheck = this.handleBannerCheck.bind(this)
    }

    keyPressed(e) {
        if (e.key === "Enter") {
            if(this.state.tagVal !== "" && !this.state.tagged.includes(this.state.tagVal)) {
                this.setState({
                    tagged: [...this.state.tagged, this.state.tagVal],
                    tagVal: ""
                })
                e.target.value = "";
            }
        }
    }

    onInputBoxChange(e) {
        this.setState({tagVal: e.target.value})
    }

    handleBannerCheck() {
        this.setState({banner: !this.state.banner});
    }

    render() {
      return (
            <div className="box">
                <div className="column left">
                <div className="title">Create an Ad Campaign</div>

                <label className="inputTitle">TOPIC TITLE</label>
                <input className="input" onKeyPress={this.keyPressed} onChange={this.onInputBoxChange} type="text" placeholder="Topic Title" id="tagInput"></input>
                <label className="inputTitle">OH GOD SOMETHING ELSE</label>
                <input className="input" type="text" placeholder="Oh god something else" name="name"></input>

                <span className="checkboxes">
                <input className="checkbox" type="checkbox" id="banner" name="banner" onChange={this.handleBannerCheck}></input>
                <label className="checkboxLabel" for="banner">Banner Ads</label>
                </span>

                <span className="checkboxes">
                <input className="checkbox" type="checkbox" id="post" name="post"></input>
                <label className="checkboxLabel" for="post">Post Ads</label>
                </span>

                <span className="checkboxes">
                <input className="checkbox" type="checkbox" id="video" name="video"></input>
                <label className="checkboxLabel" for="video">Video Ads</label>
                </span>

                {/* <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                </div> */}

                <div className="inputTitle"> AD WORDS YOU WANT TO TAG </div>
                <ul className="taggedList">
                    {this.state.tagged.map(item => (
                        <li className="tagged" key={item}>{item}</li>
                    ))}
                </ul>

                
                </div>
                <div className="column">
                    <div className="inputTitle figureTitle">
                        Estimated Reach
                    </div>
                    <div className="figure">
                        20k - 45k
                    </div>
                    <div className="inputTitle figureTitle">
                        Estimated Engagement
                    </div>
                    <div className="figure">
                        5k - 17k
                    </div>
                    <div className="costFigure">
                    <div className="inputTitle figureTitle">
                        Estimated Cost
                    </div>
                    <div className="figure cost">
                        $5k - 17k
                    </div>
                    </div>

                </div>
            </div>

      );
    }
  }

export default AdBox;