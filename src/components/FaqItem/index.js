import './index.css'

const FaqItem = props => {
  const {eachFaq, onShowAnswer, isAnswerShown, isActive} = props
  const {questionText, answerText, id} = eachFaq

  const onClickPlusOrMinus = () => {
    onShowAnswer(id)
  }

  const showAnswerIconUrl =
    isAnswerShown && isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const iconAltText = isAnswerShown && isActive ? 'minus' : 'plus'
  const questionClassName =
    isAnswerShown && isActive
      ? 'question-card question-border'
      : 'question-card'

  return (
    <li className="faq-item">
      <div className={questionClassName}>
        <h1 className="question">{questionText}</h1>
        <button onClick={onClickPlusOrMinus} className="button" type="button">
          <img src={showAnswerIconUrl} alt={iconAltText} />
        </button>
      </div>
      {isAnswerShown && isActive && <p className="answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
