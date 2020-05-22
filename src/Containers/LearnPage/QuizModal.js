import React from 'react';
import './QuizModal.css';

class QuizModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            example1_button: false,
            example2_button: false,
            example3_button: false,
            example1: "",
            example2: "",
            example3: ""
        }
    }

    render() {
        let answer1;
        let answer2;
        let answer3;
        if (this.state.example1 === true) {
            answer1 = <p class="correct">Correct! Try the next example.</p>
        }
        if (this.state.example1 === false) {
            answer1 = <p class="incorrect">Are you sure? Think about the intent.</p>
        }
        if (this.state.example2 === true) {
            answer2 = <p class="correct">Correct! Try the next example.</p>
        }
        if (this.state.example2 === false) {
            answer2 = <p class="incorrect">Are you sure? Think about the intent.</p>
        }
        if (this.state.example3 === true) {
            answer3 = <p class="correct">Correct! Try the next example.</p>
        }
        if (this.state.example3 === false) {
            answer3 = <p class="incorrect">Are you sure? Think about the intent.</p>
        }
        return (
            <div id="QuizModal" style={{visibility:this.state.show}}>
                <div id="QuizModal_content"> 
                    <span class="close" onClick={this.props.handleClose}>&times;</span>
                    <div id="QuizModal_sizing">
                        <h1>Test Your Knowledge</h1>
                        <h2>Determine whether or not the given example is misinformation or disinformation.</h2>
                        <hr></hr>

                        <div id="QuizModal_example">
                            <h3>Example 1</h3>
                                <p>
                                    A news article releases a developing story. It’s later found out that the reporter analyzed the situation wrong and reported the wrong thing.
                                </p>
                                <div class="answers">
                                    <button class="answer_choice" disable={this.state.example1_button} onClick={()=> {this.setState({example1: true, example1_button: true})}}>Misinformation</button>
                                    
                                    <button class="answer_choice" disable={this.state.example1_button} onClick={()=> {this.setState({example1: false})}}>Disinformation</button>
                                </div>
                                {answer1}
                        </div>
                        <div id="QuizModal_example">
                            <h3>Example 2</h3>
                                <p>
                                    A blogger making aggressive claims without sources.
                                </p>
                                <div class="answers">
                                    <button class="answer_choice" disable={this.state.example2_button} onClick={()=> {this.setState({example2: false, example2_button: true})}}>Misinformation</button>
                                    
                                    <button class="answer_choice" disable={this.state.example2_button} onClick={()=> {this.setState({example2: true})}}>Disinformation</button>
                                </div>
                                {answer2}
                        </div>
                        <div id="QuizModal_example">
                            <h3>Example 3</h3>
                                <p>
                                    A photo with text on how to combat COVID-19 with incorrect information about gargling with salt water.
                                </p>
                                <div class="answers">
                                    <button class="answer_choice" disable={this.state.example3_button} onClick={()=> {this.setState({example3: true, example3_button: true})}}>Misinformation</button>
                                    
                                    <button class="answer_choice" disable={this.state.example3_button} onClick={()=> {this.setState({example3: false})}}>Disinformation</button>
                                </div>
                                {answer3}

                            <button class="close-button" onClick={this.props.handleClose}> Return to Browse Topics</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizModal;