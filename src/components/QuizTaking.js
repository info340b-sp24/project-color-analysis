import React, { useState } from 'react';
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Link } from 'react-router-dom';
import { getDatabase, ref, push as firebasePush } from 'firebase/database';

const quizQuestions = [
  {question: "What is your natural hair color?", options: ["Black", "Blonde", "Brown", "Red"]},
  {question: "What is your eye color?", options: ["Blue", "Brown", "Green", "Hazel"]},
  {question: "What is your skin tone?", options: ["Fair", "Light", "Medium", "Olive", "Brown", "Dark Brown"]},
  {question: "What is your lip color?", options: ["Pale Pink", "Coral Pink", "Rose", "Burgundy"]},
  {question: "What is your vein tone?", options: ["Blue", "Green", "Purple", "Unsure"]}
];

let seasonResult = '';

function QuestionCard(props) {
  const {question, options, selectedOption, onOptionSelect} = props;
  const optionButtons = options.map((option) => {
    return (
      <button key={option} className={"quiz-option " + (selectedOption === option ? "selected" : "")} onClick={() => onOptionSelect(option)}>
        {option}
      </button>
    );
  });

  return (
    <section className="question-section">
      <p className="question">{question}</p>
      {optionButtons}
    </section>
  );
}

function determineSeason(answers) {
  let scores = {
    "cool-winter": 0,
    "cool-spring": 0,
    "warm-autumn": 0,
    "warm-summer": 0
  };

  answers.forEach((answer) => {
    if (["Black", "Brown"].includes(answer)) {
      scores["cool-winter"]++;
      scores["warm-autumn"]++;
    }
    if (answer === "Blonde") {
      scores["cool-spring"]++;
    }
    if (answer === "Red") {
      scores["warm-autumn"]++;
    }

    if (answer === "Blue") {
      scores["cool-winter"]++;
      scores["cool-spring"]++;
    }
    if (answer === "Brown") {
      scores["warm-autumn"]++;
      scores["cool-winter"]++;
    }
    if (["Green", "Hazel"].includes(answer)) {
      scores["warm-autumn"]++;
      scores["cool-spring"]++;
    }

    if (["Fair", "Light"].includes(answer)) {
      scores["cool-spring"]++;
      scores["cool-winter"]++;
    }
    if (["Medium", "Olive"].includes(answer)) {
      scores["warm-autumn"]++;
      scores["cool-spring"]++;
    }
    if (["Brown", "Dark Brown"].includes(answer)) {
      scores["cool-winter"]++;
      scores["warm-autumn"]++;
    }

    if (answer === "Pale Pink") {
      scores["cool-spring"]++;
    }
    if (["Coral Pink", "Rose"].includes(answer)) {
      scores["cool-spring"]++;
      scores["warm-summer"]++;
    }
    if (answer === "Burgundy") {
      scores["cool-winter"]++;
    }

    if (answer === "Blue") {
      scores["cool-winter"]++;
      scores["cool-spring"]++;
    }
    if (["Green", "Purple"].includes(answer)) {
      scores["warm-autumn"]++;
      scores["warm-summer"]++;
    }
    if (answer === "Unsure") {
      scores["cool-winter"]++;
      scores["warm-autumn"]++;
    }
  });

  let maxScore = -1;
  let resultSeason = '';

  for (const season in scores) {
    if (scores[season] > maxScore) {
      maxScore = scores[season];
      resultSeason = season;
    }
  }

  return resultSeason;
}

function getBackgroundClass(season) {
  const baseClass = 'big-square-qr background-color-';
  if (season === 'cool-winter') {
    return baseClass + 'cw';
  } else if (season === 'cool-spring') {
    return baseClass + 'cs';
  } else if (season === 'warm-autumn') {
    return baseClass + 'wa';
  } else if (season === 'warm-summer') {
    return baseClass + 'ws';
  } else {
    return baseClass + 'cw';
  }
}

function handleClick(event) {
  console.log("Button clicked to view recommended products");
}

function QuizTaking(props) {
  const [answers, setAnswers] = useState({});
  const [season, setSeason] = useState('');

  const handleOptionSelect = (question, option) => {
    setAnswers((prevAnswers) => {
      return { ...prevAnswers, [question]: option };
    });
  };

  const handleGetResultsClick = (event) => {
    const selectedAnswers = quizQuestions.map((q) => answers[q.question]);
    const resultSeason = determineSeason(selectedAnswers);
    setSeason(resultSeason);
    seasonResult = resultSeason;

    let seasonResultSeperate = seasonResult.split('-');
    let temp = seasonResultSeperate[0];
    let season = seasonResultSeperate[1];
    temp = temp.charAt(0).toUpperCase() + temp.slice(1);
    season = season.charAt(0).toUpperCase() + season.slice(1);

    const db = getDatabase();
    const resultRef = ref(db, "results");
    firebasePush(resultRef, { temp: temp, season: season });
  };

  const questionCards = quizQuestions.map((q, index) => {
    return (
      <QuestionCard
        key={index} question={q.question} options={q.options} selectedOption={answers[q.question]} onOptionSelect={(option) => handleOptionSelect(q.question, option)}
      />
    );
  });

  return (
    <div>
      <Nav />
      {!season && (
        <main className="body-qt">
          {questionCards}
          <button className="next-button-qt" onClick={handleGetResultsClick}>
            Get Results!
          </button>
        </main>
      )}
      {season && (
        <main className="body-quiz">
          <section>
            <div className={getBackgroundClass(season)}>
              <p className="result-top-word">You are a...</p>
              <p className="result">{season.replace('-', ' ')}</p>
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
      )}
      <Footer />
    </div>
  );
}

export function getSeason() {
  return seasonResult;
}

export default QuizTaking;