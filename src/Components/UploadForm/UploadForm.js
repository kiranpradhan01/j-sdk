import React from 'react';
import './Styles/UploadForm.css'; 
import UploadIcon from '../../Pictures/upload.png'; 
import axios from 'axios'; 
import jQuery from 'jquery'; 

// This is the the loading component that is rendered onto the page when we are doing work on the backend 
class UploadForm extends React.Component {
    constructor(props) {
      super(props); 
        this.state = {
            file: null,
            adwords: ["Basketball", "Track", "Justin Bieber", "Lebron James", "The Weeknd", "NBA", "Los Angeles Lakers"]
        }
        this.onChange = this.onChange.bind(this)
       // this.fileUpload = this.fileUpload.bind(this)
       this.onClickHandler = this.onClickHandler.bind(this);
       this.fetchJSON = this.fetchJSON.bind(this);  
    }
    onChange = e =>  {
        let fileDiv = document.getElementById("SMLessonPage_uploadForm_center_form_fileName");
        fileDiv.innerHTML = " ";  
        this.setState({file:e.target.files[0], loaded: 1}); 
        console.log(this.state.file); 
        //let fileName = document.createElement("p"); 
        fileDiv.innerHTML = e.target.files[0].name; 
        //fileDiv.appendChild(fileName);  
    }
    onClickHandler() {
       console.log(this.state.file.name);
       let myFileName = this.state.file.name; 
       if(myFileName.includes("json") || myFileName.includes("sql")) { 
            const data = new FormData(); 
            data.append('file', this.state.file); 
            console.log(data);
            console.log(this.state.file);  
            console.log(this.state.adwords); 
            this.props.onSubmitClicked(false, this.state.adwords);
            this.fetchJSON(data); 
       } else {
           let errorHandlingDiv = document.getElementById("SMLessonPage_uploadForm_center_form_eror"); 
           errorHandlingDiv.innerHTML = " "; 
           let errorHandling = document.createElement("p"); 
           errorHandling.innerText = "Please upload files that are of following types: .JSON or .sql";  
           errorHandlingDiv.appendChild(errorHandling); 
       }  
    }

    fetchJSON = (data) => {
        axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.log(res.statusText) 
            console.log(res); 
            let path = "../../../" + res.data.path; 
            
            console.log(path); 
            
            fetch(path).then(response => {
                console.log(response)
              })
              .then(data => {
                // Work with JSON data here
                console.log(data);
              }).catch(err => {
                // Do something for an error here
                console.log(err); 
              }); 
        })
        .catch(Error) 
    }


    render() {
      return (
        <div id="SMLessonPage_uploadForm">
            <div id="SMLessonPage_uploadForm_textLeft">
            <p>
                Let’s look at how Facebook Ads can Target Users:
            </p>
            </div> 

            <div id="SMLessonPage_uploadForm_center">
            <header> Upload your Facebook Data JSON File </header>
            <p> Facebook (and other social media sites) take note of what you might like and what interests you have, 
                that way they can give you ads that align with your interest the most! We’d like to show you what yours are 
                and help you understand them better. </p>
            <form id="SMLessonPage_uploadForm_center_form">  
                <div id="SMLessonPage_uploadForm_center_form_area">
                <div id="something">
                    <img id = "SMLessonPage_uploadForm_center_form_area_icon" src={UploadIcon} alt="Upload Icon"/> 
                </div>
                <p id="SMLessonPage_uploadForm_center_form_fileName"> Browse... </p>
                </div>   
                <input type="file" id="myFile" name="filename" onChange={this.onChange}/>
            </form>
            <button type="submit" onClick={this.onClickHandler}> Submit </button> 
            <div id="SMLessonPage_uploadForm_center_form_eror">
            </div>
            <div> 
                <p> Dont know what that is? <a href="https://www.cnbc.com/2018/03/23/how-to-download-a-copy-of-facebook-data-about-you.html"> Click Here </a> </p>
            </div> 
            </div>

        <div id="SMLessonPage_uploadForm_disclaimer"> 
            <p> 
            We know, we know, this isn’t the smoothest way to do this. We’re working on it right now. 
            Think you can help us? Click here.
            </p> 
        </div>
    </div>
      );
    }
  }

export default UploadForm;