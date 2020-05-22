import React from 'react';
import './Lessons.css';

class Lessons extends React.Component {

    render() {
        return (
            <div id="SMLessonPage_Lessons">
                <div class="SMLessonPage_Lessons_flex-container">
                    <div class="SMLessonPage_Lessons_benefits">
                        <header>Social Media Ad Targeting can be useful for everyone involved</header>
                        <p>
                            For companies, targeted advertising provides the ability to reach  specific demographics and groups that might be interested in their products.
                            <br/><br/>
                            This helps the platforms (like social media sites) hosting ads stay in business, while providing a place for companies to showcase their products to interested individuals.
                            <br/><br/>
                            When the methods of advertisement tracking aren’t as unsettling, people benefit from viewing ads that are more targeted towards them. Targeted ads means exposure to products, services, and content that you want to see and can help augment daily life.
                        </p>
                    </div>
                    <div class="SMLessonPage_Lessons_harms">
                        <header>However, it can also cause harm… </header>
                        <p>
                        In 2016, over 3000 ads were released from Russians Operatives that were used during the 2016 US Presidental Election. 
                        <br/><br/>
                        These ads were targeted towards specific demographics of people who were passionate about specific topics or held strong opinions. The advertisements utilized different visual elements to make them seem more legitimate, when in fact the advertisements contained disinformation, incorrect information developed with the intent to decieve.
                        <br/><br/>
                        Because of those actions, 126 million individuals were impacted by disinformation advertisements, and it is thought to have influnced the outcome of the 2016 US Presidental Election.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lessons;