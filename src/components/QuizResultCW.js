import React from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

function QuizResultCW() {
  return (
    <div>
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

function MainContent() {
  const handleClick = function (event) {
    console.log("Button clicked to view recommended products for Cool Winter");
  }

  return (
    <main className="body-quiz">
      <section>
        <div className="big-square-qr background-color-cw">
          <p className="result-top-word">
            You are a...
          </p>
          <p className="result">
            Cool Winter!
          </p>
          <Link to="../profile">
            <button className="btn btn-primary next-button-qr"
              aria-label="View recommended products"
              onClick={handleClick}>
              Recommended Products Here <span className="material-icons">arrow_forward</span>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}


export default QuizResultCW;
