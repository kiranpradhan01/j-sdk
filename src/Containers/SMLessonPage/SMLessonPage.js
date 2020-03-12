import React from 'react';
import { post } from 'axios';
import './Styles/SMLessonPage.css'; 
import LoadingComp from '../../Components/LoadingComp/LoadingComp.js'; 
import UploadForm from '../../Components/UploadForm/UploadForm.js'; 
import SocialDashboard from '../../Pictures/SocialDashboard.png';
import Adwords from '../../Components/Adwords/Adwords.js'; 
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class SMLessonPage extends React.Component {
    constructor(props) {
      super(props); 
        this.timeout = 2000;
        this.state = {   
          loadingCompHidden: true,
          loaded: 0, 
          adwords: []
        } 
        this.onSubmitClicked = this.onSubmitClicked.bind(this); 
    }
    /* 
    onFormSubmit(e){
      e.preventDefault() // Stop form submit
      this.fileUpload(this.state.file).then((response)=>{
        console.log(response.data);
      })
    }

    fileUpload(file){
      const url = 'http://example.com/file-upload';
      const formData = new FormData();
      formData.append('file',file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      return  post(url, formData,config)
    }
    */ 
    onSubmitClicked(newResult, words) {
      this.setState({ 
        loadingCompHidden: newResult,
        adwords: words
      }); 
    }
    showLoader() {
      const dataSciencetitle = "Our data scientists is on it"; 
      const dataScincedescription = "While we're analyzing your ad words, let's simulate an ad campaign to show how far simple advertisements can spread through a social media platform by targeting people with specific interests"; 
       if(!this.state.loadingCompHidden) {
        setTimeout(() => {
          this.setState({loadingCompHidden: true, loaded: 1});
        }, this.timeout);
        return (<LoadingComp title={dataSciencetitle} description={dataScincedescription}/>)
       } 
       return (null)
    }

    render() {
      return (
        <div id = "SMLessonPage">
          <div id="SMLessonPage_introduction"> 
            <div id="SMLessonPage_introduction_Text">
                <header> Let's Talk about Targeted Social Media Ads </header>
                <p> Social Media utilize advertisements to keep themselves afloat. From your favorite personality on 
                    Facebook, Instagram, TikTok, or Youtube, to the actual companies themselves, the synergy from 
                    advertisers getting exposure and people/companies getting funded continues to help both groups out. 
                    Let’s look into how social media advertisements can get to you, and how that can work in your 
                    favor… and sometimes against.</p>
            </div> 
            <div id="SMLessonPage_introduction_Image"> 
              <img src={SocialDashboard} alt="Social Media Dashboard" class="socialMediaDashboardImage"></img>
            </div>
          </div>
          {this.state.loadingCompHidden && (this.state.loaded==0) ? <UploadForm onSubmitClicked={(newResult, words) => this.onSubmitClicked(newResult, words)} />:null}
          {this.showLoader()}
          {(this.state.loaded==1) ? <Adwords adwords={this.state.adwords}/> :null}
        </div>
    )}
}

export default SMLessonPage;