import { useState } from 'react';
import Footer from './components/Footer';
import './App.css';
import Result from './components/Result';
import { questions } from './Questions/questions';
import Questions from './components/Questions';
import ChooseLanguage from './components/ChooseLanguage';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [language, setLanguage] = useState('');

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers([...wrongAnswers, currentQuestion]);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log('End of quiz');
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Result score={score} questions={questions} wrongAnswers={wrongAnswers} />
      ) : language === 'de' ? (
        <Questions
          currentQuestion={currentQuestion}
          questions={questions}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
      ) : (
        <ChooseLanguage language={language} setLanguage={setLanguage} />
      )}
      <Footer />
    </div>
  );
};

export default App;
