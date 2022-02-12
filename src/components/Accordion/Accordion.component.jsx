import React, { useState } from 'react'

import './Accordion.styles.css'

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="wrap-collapsible">
            <div className="collapsible-question" onClick={() => setIsOpen(!isOpen)}>
                <div className="collapsible-label">
                    {question}
                </div>
                <span className="accordion-sign">{isOpen ? '-' : '+' }</span>
            </div>
            {
                isOpen && (
                    <div className="collapsible-content">
                        <div className="content-inner">
                            {answer}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Accordion
