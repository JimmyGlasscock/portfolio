import React from 'react';
import './App.css';

import { useEffect } from 'react';

function App() {
  //This is for the page title
  useEffect(() => {
    document.title = 'Jimmy Glasscock\'s Portfolio';
  }, []);

  return (
    <div className="mainContainer">
      <header>
        <h1>Jimmy Glasscock</h1>
        <h3 className="myJobTitle">Full Stack Web Developer</h3>
        <div className="social-icons">
            <a href="https://www.github.com/jimmyglasscock" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/jimmy-glasscock-098958273/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:jamesglasscock99@gmail.com" target="_blank" rel="noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/jimmyglasscock" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
      </header>
      <main>
      <section className="video-section">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UCW_UH-k-ec" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        <section>
          <h2>Experience</h2>
          <div className="job">
            <h3>Full Stack Developer</h3>
            <h4>RainFocus</h4>
            <p>December 2021 - January 2023</p>
            <ul>
              <li>Created and maintained frontend pages for an event management platform using <span class="highlight">React.js</span> framework, <span class="highlight">Redux</span> and <span class="highlight">Node.js</span> environment.</li>
              <li>Added and updated functionality for our event management platform using <span class="highlight">Java Spring</span> framework.</li>
              <li>Used Jenkins platform for testing builds of our event platform.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Full Stack Developer</h3>
            <h4>Dealer eProcess</h4>
            <p>April 2021 - December 2021</p>
            <ul>
              <li>Fixed various bugs using <span class="highlight">PHP</span> pertaining to analytics data and analytics display pages.</li>
              <li>Updated legacy pages and features to fully utilize dependency injection.</li>
              <li>Implemented PHP standards such as PSR-12 in a <span class="highlight">CodeIgniter</span> environment.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Test Suite Developer</h3>
            <h4>Dental Game Plan</h4>
            <p>January 2021 - April 2021</p>
            <ul>
              <li>Created a testing suite in PHPUnit for a call staging application used by a call center.</li>
              <li>Added data monitoring functionality to our call staging application.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Web Developer</h3>
            <h4>University of Utah Campus Store</h4>
            <p>October 2018 - January 2021</p>
            <ul>
              <li>Built custom applications using <span class="highlight">Laravel</span> to automate employee workflows.</li>
              <li>Updated and maintained the University's eCommerce website.</li>
            </ul>
          </div>
          {/* Add more job sections as needed */}
        </section>
        {/* Projects section goes here*/}
        <section>
          <h2>About Me</h2>
          <p className="aboutMeText">I'm Jimmy Glasscock, a {new Date().getFullYear() % 100} year old Web Developer from Salt Lake City, Utah. I am an extrovert who loves to get to know people. Some of my interests include public speaking, making music and coding. I built this portfolio in React using ChatGPT. If you like my portfolio, let me know!</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Jimmy Glasscock</p>
      </footer>
    </div>
  );
}

export default App;
