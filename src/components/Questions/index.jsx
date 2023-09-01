const Questions = ({ currentQuestion, questions, handleAnswerButtonClick }) => {
  return (
    <>
      <div className="question-block">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            <h2>{questions[currentQuestion].questionText}</h2>
          </div>
        </div>
        {questions[currentQuestion].image && (
          <img className="question-image" src={questions[currentQuestion].image} alt="Question" />
        )}
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button
              key={index}
              onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              className="answer-button"
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Questions;
