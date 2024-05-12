import React from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

function QuizResultWA() {
  return (
    <div>
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

function MainContent() {
  return (
    <main className="body-quiz">
      <section>
        <div className="big-square-qr background-color-wa">
          <p className="result-top-word">
            You are a...
          </p>
          <p className="result">
            Warm Autumn!
          </p>
          <button className="btn btn-primary next-button-qr" aria-label="View recommended products">
            Recommended Products Here <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default QuizResultWA;
