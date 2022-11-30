import React from 'react';
import Answer from './Answer';
import Button from './Button/Button';
import getBoundingClientReact from 'react';

export default function TestInProgress({ messages }) {
  const [isCourseClicked, setIsCourseClicked] = React.useState(false);
  const [chosenCourse, setChosenCourse] = React.useState('');

  const [isQualitiesChosen, setIsQualitiesChosen] = React.useState(false);
  const [chosenQualities, setChosenQualities] = React.useState([]);

  const [isCappabilitiesChosen, setIsCappabilitiesChosen] = React.useState(false);
  const [chosenCappabilities, setChosenCappabilities] = React.useState([]);

  const [isExpressionsChosen, setIsExpressionsChosen] = React.useState(false);
  const [chosenExpressions, setChosenExpressions] = React.useState([]);

  function handleClickCourse(e) {
    setIsCourseClicked(!isCourseClicked);
    setChosenCourse(e.target.value);
  }

  function handleClickQualities(e) {
    setChosenQualities([...chosenQualities, e.target.value]);
  }

  function handleSubmitQualities() {
    setIsQualitiesChosen(true);
  }

  function handleClickCappabilities(e) {
    setChosenCappabilities([...chosenCappabilities, e.target.value]);
  }

  function handleSubmitCappabilities() {
    setIsCappabilitiesChosen(true);
  }

  function handleClickExpressions(e) {
    setChosenExpressions([...chosenExpressions, e.target.value]);
  }

  function handleSubmitExpressions() {
    setIsExpressionsChosen(true);
  }

  function renderBotMessages(data) {
    return data.map((item, index) => {
      return (
        <p className="test__message-from-yandex" key={index}>
          {item}
        </p>
      );
    });
  }

  return (
    <>
      {/* НАПРАВЛЕНИЕ */}
      {renderBotMessages(messages.startQuestions)}
      {isCourseClicked ? (
        <p className="test__message-from-applicant">{chosenCourse}</p>
      ) : (
        <div className="test__answer-container">
          {messages.startAnswers.map((item) => {
            return <Answer item={item} onClick={handleClickCourse} />;
          })}
        </div>
      )}

      {/* КАЧЕСТВА */}
      {isCourseClicked && renderBotMessages(messages.qualitiesQuestions)}
      {isCourseClicked &&
        (isQualitiesChosen ? (
          <p className="test__message-from-applicant">{chosenQualities}</p>
        ) : (
          <>
            <div className="test__answer-container">
              {messages.qualitiesAnswers.map((item) => {
                return <Answer item={item} onClick={handleClickQualities} />;
              })}
            </div>
            <div className="test__button-container">
              <Button text="Отправить ответ" width={'168px'} handleClick={handleSubmitQualities}></Button>
            </div>
          </>
        ))}

      {/* ВОЗМОЖНОСТИ */}
      {isQualitiesChosen && renderBotMessages(messages.capabilitiesQuestions)}
      {isQualitiesChosen &&
        (isCappabilitiesChosen ? (
          <p className="test__message-from-applicant">{chosenCappabilities}</p>
        ) : (
          <>
            <div className="test__answer-container">
              {messages.capabilitiesAnswers.map((item) => {
                return <Answer item={item} onClick={handleClickCappabilities} />;
              })}
            </div>
            {/* КНОПКА СЖИМАЕТСЯ, УПИРАЯСЬ В НИЖНИЙ КРАЙ. КОНТЕЙНЕР НУЖЕН, ЧТО БЫ ПРЕДОТВРАТИТЬ ТАКОЕ ПОВЕДЕНИЕ */}
            <div className="test__button-container">
              <Button text="Отправить ответ" width={'168px'} handleClick={handleSubmitCappabilities}></Button>
            </div>
          </>
        ))}

      {/* ВЫРАЖЕНИЕ О СЕБЕ */}
      {isCappabilitiesChosen && renderBotMessages(messages.expressionsQuestions)}
      {isCappabilitiesChosen &&
        (isExpressionsChosen ? (
          <p className="test__message-from-applicant">{chosenExpressions}</p>
        ) : (
          <>
            <div className="test__answer-container">
              {messages.expressionAnswers.map((item) => {
                return <Answer item={item} onClick={handleClickExpressions} />;
              })}
            </div>
            {/* КНОПКА СЖИМАЕТСЯ, УПИРАЯСЬ В НИЖНИЙ КРАЙ. КОНТЕЙНЕР НУЖЕН, ЧТО БЫ ПРЕДОТВРАТИТЬ ТАКОЕ ПОВЕДЕНИЕ */}
            <div className="test__button-container">
              <Button text="Отправить ответ" width={'168px'} handleClick={handleSubmitExpressions}></Button>
            </div>
          </>
        ))}

      {isExpressionsChosen && (
        <p className="test__message-from-yandex">
          {`Круто, спасибо за ответы! Я вижу, что всё указывает на то, что вам суждено стать наставником. Попробуйте, я уверена, вы останетесь довольны этим решением! :)`}
        </p>
      )}
      {isExpressionsChosen && renderBotMessages(messages.goodLuck)}
      {isExpressionsChosen && <div className="test__button-container">
              <Button text="Посмотреть предложения" width={'250px'}></Button>
            </div>}
    </>
  );
}