import React from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

const seasons = {
  CoolSummer: {
    backgroundColor: 'background-color-cs',
    resultText: 'Cool Summer!'
  },
  CoolWinter: {
    backgroundColor: 'background-color-cw',
    resultText: 'Cool Winter!'
  },
  WarmAutumn: {
    backgroundColor: 'background-color-wa',
    resultText: 'Warm Autumn!'
  },
  WarmSpring: {
    backgroundColor: 'background-color-ws',
    resultText: 'Warm Spring!'
  }
};

function QuizResult({ seasonType }) {
  const { backgroundColor, resultText } = seasons[seasonType];

  const handleClick = function(event) {
    console.log(`Button clicked to view recommended products for ${resultText}`);
  }

  return (
    <div>
      <Nav />
      <MainContent props={{backgroundColor, resultText, handleClick}} />
      <Footer />
    </div>
  );
}

function MainContent({ props }) {
  const { backgroundColor, resultText, handleClick } = props;

  return (
    <main className="body-quiz">
      <section>
        <div className={`big-square-qr ${backgroundColor}`}>
          <p className="result-top-word">
            You are a...
          </p>
          <p className="result">
            {resultText}
          </p>
          <button className="btn btn-primary next-button-qr"
                  aria-label="View recommended products"
                  onClick={handleClick}>
            Recommended Products Here <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default QuizResult;