import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isShowAnswer: false, activeId: 0}

  onShowAnswer = id => {
    this.setState(prevState => ({
      isShowAnswer: !prevState.isShowAnswer,
      activeId: id,
    }))
  }

  render() {
    const {isShowAnswer, activeId} = this.state
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                eachFaq={eachFaq}
                key={eachFaq.id}
                onShowAnswer={this.onShowAnswer}
                isAnswerShown={isShowAnswer}
                isActive={activeId === eachFaq.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
