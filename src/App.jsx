import React, { useState } from 'react';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const questions = [
    {
      questionText: 'Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?',
      answerOptions: [
        { answerText: 'A) Pressezensur', isCorrect: false },
        { answerText: 'B) willkürliche Verhaftungen', isCorrect: false },
        { answerText: 'C) Verfolgung der Juden', isCorrect: false },
        { answerText: 'D) freie Wahlen', isCorrect: true },
      ],
    },
    {
      questionText: 'In Deutschland gehören der Bundestag und der Bundesrat zur …',
      answerOptions: [
        { answerText: 'A) Judikative', isCorrect: false },
        { answerText: 'B) Legislative', isCorrect: true },
        { answerText: 'C) Exekutive', isCorrect: false },
        { answerText: 'D) Direktive', isCorrect: false },
      ],
    },
    {
      questionText: 'Die Wirtschaftsform in Deutschland nennt man …',
      answerOptions: [
        { answerText: 'A) soziale Marktwirtschaft.', isCorrect: true },
        { answerText: 'B) Planwirtschaft.', isCorrect: false },
        { answerText: 'C) freie Zentralwirtschaft.', isCorrect: false },
        { answerText: 'D) gelenkte Zentralwirtschaft.', isCorrect: false },
      ],
    },
    {
      questionText: 'Wann wurde die Bundesrepublik Deutschland gegründet?',
      answerOptions: [
        { answerText: 'A) 1949', isCorrect: true },
        { answerText: 'B) 1951', isCorrect: false },
        { answerText: 'C) 1939', isCorrect: false },
        { answerText: 'D) 1945', isCorrect: false },
      ],
    },
    {
      questionText: 'Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?',
      answerOptions: [
        { answerText: 'A) Stadträte', isCorrect: false },
        { answerText: 'B) Bezirksämter', isCorrect: false },
        { answerText: 'C) Landräte', isCorrect: false },
        { answerText: 'D) Gemeinden', isCorrect: true },
      ],
    },
    {
      questionText: 'Wen kann man als Bürger / Bürgerin in Deutschland nicht direkt wählen?',
      answerOptions: [
        { answerText: 'A) Bundestagsabgeordnete', isCorrect: false },
        { answerText: 'B) den Bundespräsidenten / die Bundespräsidentin', isCorrect: true },
        { answerText: 'C) Abgeordnete des EU-Parlaments', isCorrect: false },
        { answerText: 'D) Landtagsabgeordnete', isCorrect: false },
      ],
    },
    {
      questionText: 'Die Bundesrepublik Deutschland hat die Grenzen von heute seit …',
      answerOptions: [
        { answerText: 'A) 1971', isCorrect: false },
        { answerText: 'B) 1990', isCorrect: true },
        { answerText: 'C) 1933', isCorrect: false },
        { answerText: 'D) 1949', isCorrect: false },
      ],
    },
    {
      questionText: 'Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?',
      answerOptions: [
        { answerText: 'A) 3', isCorrect: false },
        { answerText: 'B) 4', isCorrect: true },
        { answerText: 'C) 5', isCorrect: false },
        { answerText: 'D) 6', isCorrect: false },
      ],
    },
    {
      questionText: 'Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben des deutschen Bundespräsidenten / der deutschen Bundespräsidentin?',
      answerOptions: [
        { answerText: 'A) Er / Sie kontrolliert die Regierungspartei.', isCorrect: false },
        { answerText: 'B) Er / Sie führt die Regierungsgeschäfte.', isCorrect: false },
        { answerText: 'C) Er / Sie wählt die Minister / Ministerinnen aus.', isCorrect: false },
        { answerText: 'D) Er / Sie schlägt den Kanzler / die Kanzlerin zur Wahl vor.', isCorrect: true },
      ],
    },
    {
      questionText: 'Wer wird als „Kanzler der Deutschen Einheit“ bezeichnet?',
      answerOptions: [
        { answerText: 'A) Helmut Kohl', isCorrect: true },
        { answerText: 'B) Konrad Adenauer', isCorrect: false },
        { answerText: 'C) Gerhard Schröder', isCorrect: false },
        { answerText: 'D) Helmut Schmidt', isCorrect: false },
      ],
    },
    {
      questionText: 'Wer kann Gerichtsschöffe / Gerichtsschöffin in Deutschland werden?',
      answerOptions: [
        { answerText: 'A) nur Personen mit einem abgeschlossenen Jurastudium', isCorrect: false },
        { answerText: 'B) alle deutschen Staatsangehörigen älter als 24 und jünger als 70 Jahre', isCorrect: true },
        { answerText: 'C) alle in Deutschland geborenen Einwohner / Einwohnerinnen über 18 Jahre', isCorrect: false },
        { answerText: 'D) alle Personen, die seit mindestens 5 Jahren in Deutschland leben', isCorrect: false },
      ],
    },
    {
      questionText: 'Aus welchem Land kamen die ersten Gastarbeiter / Gastarbeiterinnen in die Bundesrepublik Deutschland?',
      answerOptions: [
        { answerText: 'A) Portugal', isCorrect: false },
        { answerText: 'B) Spanien', isCorrect: false },
        { answerText: 'C) Türkei', isCorrect: false },
        { answerText: 'D) Italien', isCorrect: true },
      ],
    },
    {
      questionText: 'Was ereignete sich am 17. Juni 1953 in der DDR?',
      answerOptions: [
        { answerText: 'A) landesweite Streiks und ein Volksaufstand', isCorrect: true },
        { answerText: 'B) der 1. SED-Parteitag', isCorrect: false },
        { answerText: 'C) der feierliche Beitritt zum Warschauer Pakt', isCorrect: false },
        { answerText: 'D) der erste Besuch Fidel Castros', isCorrect: false },
      ],
    },
    {
      questionText: 'Wer leitet das deutsche Bundeskabinett?',
      answerOptions: [
        { answerText: 'A) der Bundespräsident / die Bundespräsidentin', isCorrect: false },
        { answerText: 'B) der Bundeskanzler / die Bundeskanzlerin', isCorrect: true },
        { answerText: 'C) der Bundesratspräsident / die Bundesratspräsidentin', isCorrect: false },
        { answerText: 'D) der Bundestagspräsident / die Bundestagspräsidentin', isCorrect: false },
      ],
    },
    {
      questionText: 'Wer wird bei der Europawahl gewählt?',
      answerOptions: [
        { answerText: 'A) die Europäische Kommission', isCorrect: false },
        { answerText: 'B) die Länder, die in die EU eintreten dürfen', isCorrect: false },
        { answerText: 'C) die Abgeordneten des Europäischen Parlaments', isCorrect: true },
        { answerText: 'D) die europäische Verfassung', isCorrect: false },
      ],
    },
    {
      questionText: 'Wie endete der Zweite Weltkrieg in Europa offiziell?',
      answerOptions: [
        { answerText: 'A) durch eine Revolution in Deutschland', isCorrect: false },
        { answerText: 'B) durch die bedingungslose Kapitulation Deutschlands', isCorrect: true },
        { answerText: 'C) mit dem Rückzug der Deutschen aus den besetzten Gebieten', isCorrect: false },
        { answerText: 'D) mit dem Tod Adolf Hitlers', isCorrect: false },
      ],
    },
    {
      questionText: 'Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?',
      answerOptions: [
        { answerText: 'A) die Bürgerversammlung', isCorrect: true },
        { answerText: 'B) der Bundespräsident / die Bundespräsidentin', isCorrect: false },
        { answerText: 'C) der Bundesrat', isCorrect: false },
        { answerText: 'D) die Regierung', isCorrect: false },
      ],
    },
    {
      questionText: 'Welches war das Wappen der Deutschen Demokratischen Republik?',
      image: "public/question18.png",
      answerOptions: [
        { answerText: 'A) 1', isCorrect: false },
        { answerText: 'B) 2', isCorrect: false },
        { answerText: 'C) 3', isCorrect: false },
        { answerText: 'D) 4', isCorrect: true },
      ],
    },
    {
      questionText: 'Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …',
      answerOptions: [
        { answerText: 'A) Europawahl.', isCorrect: false },
        { answerText: 'B) Landtagswahl.', isCorrect: true },
        { answerText: 'C) Kommunalwahl.', isCorrect: false },
        { answerText: 'D) Bundestagswahl.', isCorrect: false },
      ],
    },{
      questionText: 'Welche Hauptaufgabe hat der deutsche Bundespräsident / die deutsche Bundespräsidentin? Er / Sie …',
      answerOptions: [
        { answerText: 'A) überwacht die Einhaltung der Gesetze.', isCorrect: false },
        { answerText: 'B) entwirft die Gesetze.', isCorrect: false },
        { answerText: 'C) repräsentiert das Land.', isCorrect: true },
        { answerText: 'D) regiert das Land.', isCorrect: false },
      ],
    },
    {
      questionText: 'Wie wird die Verfassung der Bundesrepublik Deutschland genannt?',
      answerOptions: [
        { answerText: 'A) Gesetzbuch', isCorrect: false },
        { answerText: 'B) Grundgesetz', isCorrect: false },
        { answerText: 'C) Verfassungsvertrag', isCorrect: false },
        { answerText: 'D) Bundesverfassung', isCorrect: true },
      ],
    },
    {
      questionText: 'Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …',
      answerOptions: [
        { answerText: 'A) Bundesverdienstkreuz.', isCorrect: true },
        { answerText: 'B) Ehrentitel „Held der Deutschen Demokratischen Republik“.', isCorrect: false },
        { answerText: 'C) Vaterländischen Verdienstorden.', isCorrect: false },
        { answerText: 'D) Bundesadler.', isCorrect: false },
      ],
    },
    {
      questionText: 'Welcher Politiker steht für die „Ostverträge“?',
      answerOptions: [
        { answerText: 'A) Willy Brandt', isCorrect: true },
        { answerText: 'B) Michail Gorbatschow', isCorrect: false },
        { answerText: 'C) Ludwig Erhard', isCorrect: false },
        { answerText: 'D) Helmut Kohl', isCorrect: false },
      ],
    },
    {
      questionText: 'Welche Aussage ist richtig? In Deutschland …',
      answerOptions: [
        { answerText: 'A) bilden Staat und Religionsgemeinschaften eine Einheit.', isCorrect: false },
        { answerText: 'B) ist der Staat abhängig von den Religionsgemeinschaften.', isCorrect: false },
        { answerText: 'C) bilden die Religionsgemeinschaften den Staat.', isCorrect: false },
        { answerText: 'D) sind Staat und Religionsgemeinschaften voneinander getrennt.', isCorrect: true },
      ],
    },
    {
      questionText: 'Wann wurde die DDR gegründet?',
      answerOptions: [
        { answerText: 'A) 1947', isCorrect: false },
        { answerText: 'B) 1949', isCorrect: true },
        { answerText: 'C) 1953', isCorrect: false },
        { answerText: 'D) 1956', isCorrect: false },
      ],
    },
    {
      questionText: 'Parlamentsmitglieder, die von den Bürgern und Bürgerinnen gewählt werden, nennt man …',
      answerOptions: [
        { answerText: 'A) Ministerpräsidenten / Ministerpräsidentinnen.', isCorrect: false },
        { answerText: 'B) Botschafter / Botschafterinnen.', isCorrect: false },
        { answerText: 'C) Abgeordnete.', isCorrect: true },
        { answerText: 'D) Kanzler / Kanzlerinnen.', isCorrect: false },
      ],
    },
    {
      questionText: 'Was gab es während der Zeit des Nationalsozialismus in Deutschland?',
      answerOptions: [
        { answerText: 'A) das Recht zur freien Entfaltung der Persönlichkeit', isCorrect: false },
        { answerText: 'B) Pressefreiheit', isCorrect: false },
        { answerText: 'C) das Verbot von Parteien', isCorrect: true },
        { answerText: 'D) den Schutz der Menschenwürde', isCorrect: false },
      ],
    },
    {
      questionText: 'Was bedeutet „Volkssouveränität“?',
      answerOptions: [
        { answerText: 'A) Der König / die Königin herrscht über das Volk.', isCorrect: false },
        { answerText: 'B) Die Staatsgewalt geht vom Volke aus.', isCorrect: true },
        { answerText: 'C) Das Bundesverfassungsgericht steht über der Verfassung.', isCorrect: false },
        { answerText: 'D) Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.', isCorrect: false },
      ],
    },
    {
      questionText: 'In welchem Jahr wurde die Mauer in Berlin gebaut?',
      answerOptions: [
        { answerText: 'A) 1953', isCorrect: false },
        { answerText: 'B) 1956', isCorrect: false },
        { answerText: 'C) 1961', isCorrect: true },
        { answerText: 'D) 1959', isCorrect: false },
      ],
    },
    {
      questionText: 'Wer wählt den Bundeskanzler / die Bundeskanzlerin in Deutschland?',
      answerOptions: [
        { answerText: 'A) der Bundesrat', isCorrect: false },
        { answerText: 'B) der Bundestag', isCorrect: true },
        { answerText: 'C) das Volk', isCorrect: false },
        { answerText: 'D) die Bundesversammlung', isCorrect: false },
      ],
    },
    {
      questionText: 'Wie nennt man den Regierungschef / die Regierungschefin des Stadtstaates Berlin?',
      answerOptions: [
        { answerText: 'A) Oberbürgermeister / Oberbürgermeisterin', isCorrect: false },
        { answerText: 'B) Ministerpräsident / Ministerpräsidentin', isCorrect: false },
        { answerText: 'C) Regierender Bürgermeister / Regierende Bürgermeisterin', isCorrect: false },
        { answerText: 'D) Präsident / Präsidentin des Senats', isCorrect: true },
      ],
    },
    {
      questionText: 'Für wie viele Jahre wird das Landesparlament in Berlin gewählt?',
      answerOptions: [
        { answerText: 'A) 3', isCorrect: false },
        { answerText: 'B) 4', isCorrect: false },
        { answerText: 'C) 5', isCorrect: true },
        { answerText: 'D) 6', isCorrect: false },
      ],
    },
    {
      questionText: 'Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?',
      answerOptions: [
        { answerText: 'A) 14', isCorrect: false },
        { answerText: 'B) 16', isCorrect: false },
        { answerText: 'C) 18', isCorrect: false },
        { answerText: 'D) 20', isCorrect: true },
      ],
    },

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <h2>Results</h2>
          <h3>Total questions: {questions.length}</h3>
          <div className="rightAnwsers">
            <p>
              <img src="/check-icon.svg" alt="Ícone de marcação correta" />
              Correct answers
            </p>
            <span>
              {score}
            </span>
          </div>
          <div className="wrongAnwsers">
            <p>
              <img src="/x-icon.svg" alt="Ícone de marcação incorreta" />
              Wrong answers
            </p>
            <span>
              {questions.length - score}
            </span>
          </div>
          <div className="messages">
            {score >= 3 ? (
              <img className="conffetiEffect" src="conffeti.gif" alt="Efeito de confete" />
            ) : (
              
                <h1 className="messageResult">You failed, get out of Germany</h1>
              
            )}
          </div>
        </div>
      ) : (
        <>
        <div className="question-block">
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              <h2>
                {questions[currentQuestion].questionText}
              </h2>             
            </div>
          </div>
          {questions[currentQuestion].image && <img src={questions[currentQuestion].image} alt="Question" />}
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                className='answer-button'
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
