import React from 'react';
import { Nav } from './Nav';
import { Footer } from './Footer';

function QuizLanding() {
  return (
    <div>
      <Nav />
      <main className="body-lp background-color-lp body-quiz">
        <section className="container">
          <HeaderSection />
          <QuizDescription />
          <StartQuizButton />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      <p className="landing-top-word">
        From Shades to Styles
      </p>
      <p className="landing-middle-word">
        Custom Color Analysis Quiz
      </p>
    </div>
  );
}

function QuizDescription() {
  return (
    <div>
      <p className="landing-bottom-word-1">
        Spend just two minutes with us, and we'll craft a personalized color
      </p>
      <p className="landing-bottom-word-2">
        profile to enhance your natural beauty.
      </p>
    </div>
  );
}

function StartQuizButton() {
  const handleStartQuizClick = function(event) {
    console.log("Navigate to quiz");
  }
  return (
    <div className="center-button-lp">
      <button className="btn btn-primary next-button-lp" aria-label="Start the quiz" onClick={handleStartQuizClick}>
        Start Quiz!
      </button>
    </div>
  );
}

export default QuizLanding;