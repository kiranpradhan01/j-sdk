import React from 'react';
import './LearnPage.css';
import Select from "../../Pictures/Select.png";
import Decide from "../../Pictures/Decide.png";
import SocialMediaDashboard from "../../Pictures/SocialMediaDashboard.png";
import Global from "../../Pictures/Global.png";
import Search from "../../Pictures/Search.png";
import Slant from "../../Pictures/purple-slant.png";
import Footer from "../../Components/Footer/Footer.js"

class LearnPage extends React.Component {
    handleClick(id) {
        let element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    rerouteToSocial() {
        window.location.assign('/topics/socialmedia');
    }

    render() {
        return(
            <div>
                <div id="LearnPage_introduction"> 
                    <div id="LearnPage_introduction_Text">
                        <header id="top">Your Crash Course on Misinformation</header>
                        <p>The spread of misleading and inaccurate information online is a growing problem that has proven to impact people’s decisions, from everyday purchases to democratic elections. Before we jump into the details, let’s brush up on some key terms that we will be referencing.</p>
                    </div> 
                    <div> 
                        <img src={Select} alt="Man looking at different hexagonal panels with red and blue lines of information" id="img-select"></img>
                    </div>
                </div>

                <div class="center">
                    <div id="LearnPage_definitions_Text">
                        <h2>Misinformation</h2>
                        <p>Misinformation is information that is misleading or false which can stem from pure error. Think of it like a mistake. So when a news reporter accidentally discusses incorrect details on a developing story, that’s misinformation, and people consuming that misinformation become misinformed.</p>

                        <h2>Disinformation</h2>
                        <p>Disinformation is misinformation with a goal of <strong>intentionally decieving</strong> someone, especially from government organizations to other countries or the media.</p>
                    </div>
                </div>

                <div id="LearnPage_questions"> 
                    <div> 
                        <img src={Decide} alt="Man looking at different hexagonal panels with red and blue lines of information" class="img-decide"></img>
                    </div>
                    <div id="LearnPage_questions_Text">
                        <h2>Aren't they the same?</h2>
                        <p>Yes and no. Misinformation encompasses disinformation, but not all misinformation is disinformation. The main difference here is <strong>intent</strong>. Was something intentionally meant to decieve someone, or was it an error in relaying a piece of factual information? The line can feel very blurry, but one way we remember the difference is with this mnemonic device: <br></br>
                        <br></br>
                        For <strong>Misinformation</strong>, think <strong>mistake</strong>. For <strong>Disinformation</strong>, think <strong>decieve</strong>.</p>
                    </div> 
                </div>

                <div class="center">
                    <div id="LearnPage_definitions_Text">
                        <h2>What about “Fake News”?</h2>
                        <p>The term 'Fake News' refers to news that consists of deliberate disinformation through a traditional news media or online social media. The term has also been used to categorize news media sites that aren’t deemed trustworthy by an individual. 

                        In order to keep things clear, we’ll avoid using the term 'Fake News' in order to focus on the validity and intent of information objectively.</p>
                    </div>
                </div>

                <div class="center">
                    <div id="LearnPage_definitions_Text">
                        <h2>Understanding the Difference</h2>
                        <p>It can be difficult to understand the difference between misinformation and disinformation. In doing so, you should always consider the intent behind the information. Was their goal to decieve or was there simply a mistake in reporting? Before moving on, test you understanding a quick quiz to see if you can spot the difference between misinformation and disinformation!</p>
                    </div>
                    <div>
                        <button id="quiz-button">Test Your Knowledge</button>
                    </div>
                </div>

                <div id="LearnPage_topics">
                    <h2 className="overlay">Learn More about Misinformation</h2>
                    <div id="LearnPage_topics_overlay">
                        <div id="LearnPage_topics_container">
                            <div class="topic-container center" id="purple-background">
                                <div><img src={SocialMediaDashboard} alt="People piecing together a social media dashboard on a giant phone" class="img-learn-more"></img></div>
                                <div id="topic-content">
                                    <h1>Targeted Social Media Advertisements</h1>
                                    <p>It can be useful, but unsettling to see an ad specifically targeted to you, but how can that impact how you think about yourself? Learn about how targeted social media ads can be a vector for misinformation.</p>
                                </div>
                                <div class="center">
                                    <button id="learn-more-button" onClick={() => this.rerouteToSocial()}>View Topic</button>
                                </div>
                            </div>
                            <div class="topic-container center" id="pink-background">
                                <div><img src={Global} alt="Map of the world with lines connecting continents" class="img-learn-more"></img></div>
                                <div id="topic-content">
                                    <h1>How Fear Spreads Misinformation</h1>
                                    <p>In times of crisis and uncertainty, it’s easy to grasp onto whatever information you can find, factual or not. Learn about how information turn into misinformation. <br></br> <br></br></p>
                                </div>
                                <div class="center">
                                    <button id="learn-more-button-pink">Coming Soon!</button>
                                </div>
                            </div>
                            <div class="topic-container center" id="green-background">
                                <div><img src={Search} alt="Girl holding large magnifying glass up to webpage" class="img-learn-more"></img></div>
                                <div id="topic-content">
                                    <h1>Search Engines and You</h1>
                                    <p>How does the algorithm underlying search engines influence what search results you see?  Learn about how search engine algorithms can result in being misinformed.
                                        <br></br><br></br>
                                    </p>
                                </div>
                                <div class="center">
                                    <button id="learn-more-button-green">Coming Soon!</button>
                                </div>
                            </div>
                        </div>
                        <div class="center">
                            <button onClick={() => this.handleClick("top")} id="to-top-button">Back to the top!</button>
                        </div>
                    </div>
                    <div>
                        <img src={Slant} class="background-slant"></img>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default LearnPage;
