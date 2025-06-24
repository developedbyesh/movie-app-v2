import React from 'react';

const App = () => {
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <h1>
            <img src="./hero.png" alt="Hero Banner" />
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            without the Hassle
          </h1>
        </header>
      </div>
    </main>
  );
};

export default App;
