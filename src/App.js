import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Jimmy Glasscock</h1>
        <h3 className="myJobTitle">Full Stack Web Developer</h3>
      </header>
      <main>
        <section>
          <h2>Experience</h2>
          <div className="job">
            <h3>Full Stack Developer</h3>
            <h4>RainFocus</h4>
            <p>December 2021 - January 2023</p>
            <ul>
              <li>Created and maintained frontend pages for an event management platform using <span class="highlight">React.js</span> framework, <span class="highlight">Redux</span> and <span class="highlight">Node.js</span> environment.</li>
              <li>Added and updated functionality for our event management platform using Java Spring framework.</li>
              <li>Used Jenkins platform for testing builds of our event platform.</li>
            </ul>
          </div>
          <div className="job">
            <h3>Job Title</h3>
            <h4>Company Name</h4>
            <p>Date Range</p>
            <ul>
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              <li>Responsibility 3</li>
            </ul>
          </div>
          {/* Add more job sections as needed */}
        </section>
        <section>
          <h2>Projects</h2>
          {/* Your projects details */}
        </section>
        <section>
          <h2>About Me</h2>
          <p className="aboutMeText">Your introduction and brief description.</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Jimmy Glasscock</p>
      </footer>
    </div>
  );
}

export default App;
