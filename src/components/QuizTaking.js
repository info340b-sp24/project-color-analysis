import React from 'react';
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const quizQuestions = [
  { question: "What is your natural hair color?", options: ["Black", "Blonde", "Brown", "Red"] },
  { question: "What is your eye color?", options: ["Blue", "Brown", "Green", "Hazel"] },
  { question: "What is your skin tone?", options: ["Fair", "Light", "Medium", "Olive", "Brown", "Dark Brown"] },
  { question: "What is your lip color?", options: ["Pale Pink", "Coral Pink", "Rose", "Burgundy", ""] },
  { question: "What is your vein tone?", options: ["Blue", "Green", "Purple", "Unsure"] }
];

function QuestionCard(props) {
  const { question, options } = props;

  const handleOptionClick = function(event) {
    console.log("User Clicked", event);
  }

  const optionButtons = options.map(option => (
    <button key={option} className="quiz-option" onClick={handleOptionClick}>
      {option}
    </button>
  ));

  return (
    <section className="question-section">
      <p className="question">{question}</p>
      {optionButtons}
    </section>
  );
}

function QuizTaking() {
  const questionCards = quizQuestions.map((q, index) => (
    <QuestionCard key={index} question={q.question} options={q.options} />
  ));

  const handleGetResultsClick = function(event) {
    console.log("Navigate to results");
  }

  return (
    <div>
      <Nav />
      <main className="body-qt">
        {questionCards}
        <a href="QuizResultWA.js" className="next-button-qt" aria-label="Get quiz results" onClick={handleGetResultsClick}>
          Get Results!
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default QuizTaking;