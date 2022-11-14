import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {activeId: []}

  onShowAnswer = id => {
    this.setState(prevState => {
      const {activeId} = prevState
      if (activeId.includes(id)) {
        return {
          activeId: activeId.filter(eachId => eachId !== id),
        }
      }
      return {
        activeId: [...activeId, id],
      }
    })
  }

  render() {
    const {faqsList} = this.props
    const {activeId} = this.state

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
                isActive={activeId.includes(eachFaq.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
