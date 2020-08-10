import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <main>
                <div className="about">
                    <h2>Hi! I'm JohnDoe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex possimus excepturi molestias numquam. Atque qui eum, culpa excepturi mollitia nemo laborum, tenetur facilis error rem eligendi, adipisci assumenda iste.</p>
                    <ul>
                        <li>Text Here</li>
                        <li>Text Here</li>
                        <li>Text Here</li>
                        <li>Text Here</li>
                        <li>Text Here</li>
                        <li>Text Here</li>
                    </ul>
                    <ol>
                        <li>Number Text here</li>
                        <li>Number Text here</li>
                        <li>Number Text here</li>
                        <li>Number Text here</li>
                    </ol>
                </div>
            </main>
        );
    }
}
export default About;
