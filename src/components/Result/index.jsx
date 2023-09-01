/* eslint-disable react/prop-types */
const Result = ({ score, questions, wrongAnswers }) => {
  console.log('wrongAnswers', wrongAnswers);
  return (
    <div className="score-section">
      <h2>Results</h2>
      <h3>Total questions: {questions.length}</h3>
      <div className="rightAnwsers">
        <p>
          <img src="/check-icon.svg" alt="Ícone de marcação correta" />
          Correct answers
        </p>
        <span>{score}</span>
      </div>
      <div className="wrongAnwsers">
        <p>
          <img src="/x-icon.svg" alt="Ícone de marcação incorreta" />
          Wrong answers
        </p>
        <span>{questions.length - score}</span>
      </div>
      <div className="messages">
        {score >= 17 ? (
          <img className="conffetiEffect" src="conffeti.gif" alt="Efeito de confete" />
        ) : (
          <h1 className="messageResult">You failed, get out of Germany</h1>
        )}
      </div>
      <br />
      <div className="wrongAnswers">
        {wrongAnswers.map((wrongAnswer, index) => (
          <div key={index} className="wrongAnswer">
            <h5 className="wrongQuestion">{questions[wrongAnswer].questionText}</h5>
            <h6 className="correctAnswer">Richtige Antwort : </h6>
            <h6 className="correctAnswerBottom">
              {questions[wrongAnswer].answerOptions.map((option) => {
                if (option.isCorrect) {
                  return option.answerText;
                }
              })}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;

{
  /* <div key={index} className="wrongAnswer">
                <h2>{questions[wrongAnswer].questionText}</h2>
                <h3>Correct answer: </h3>
                <p>
                    {questions[wrongAnswer].answerOptions.map((option) => {
                        if (option.isCorrect) {
                            return option.answerText;
                        }
                    })}
                </p>
            </div> */
}
