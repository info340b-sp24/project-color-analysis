import { React, useState } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const quizQuestions = [
  {
    question: "What is your natural hair color?",
    options: ["Black", "Blonde", "Brown", "Red"],
  },
  {
    question: "What is your eye color?",
    options: ["Blue", "Brown", "Green", "Hazel"],
  },
  {
    question: "What is your skin tone?",
    options: ["Fair", "Light", "Medium", "Olive", "Brown", "Dark Brown"],
  },
  {
    question: "What is your lip color?",
    options: ["Pale Pink", "Soft Pink", "Terra Cotta", "Natural Blush", "Warm Brown", "Deep Red"],
  },
  {
    question: "What is your vein tone?",
    options: ["Blue", "Green", "Purple", "Unsure"],
  }
];

function QuestionCard({ question, options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <section className="question-section">
      <p className="question">{question}</p>
      {options.map(option => (
        <button key={option} className="quiz-option" onClick={() => setSelectedOption(option)}>
          {option}
        </button>
      ))}
    </section>
  );
}

function QuizTaking() {
  return (
    <div>
      <Nav />
      <main className="body-qt">
        {quizQuestions.map((q, index) => (
          <QuestionCard key={index} question={q.question} options={q.options} />
        ))}
        <a href="quiz-result-wa.html" className="next-button-qt" aria-label="Get quiz results">
          Get Results!
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default QuizTaking;