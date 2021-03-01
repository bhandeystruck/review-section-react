import React from 'react';

import Review from './Review';
//Using react-icons

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
        </div>
        {/* This component Single handedly will deal with everything */}
        <Review/>
      </section>
    </main>
  );
}

export default App;
