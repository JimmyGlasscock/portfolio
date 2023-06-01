import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Your Name</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Your introduction and brief description.</p>
        </section>
        <section>
          <h2>Experience</h2>
          {/* Your experience details */}
        </section>
        <section>
          <h2>Projects</h2>
          {/* Your projects details */}
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;
