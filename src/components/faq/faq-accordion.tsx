'use client';

import React, { useState } from 'react';
import Accordion from './accordion';

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Q1: How does it work?",
            answer: "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile."
        },
        { question: "Q2: Why inhale melatonin?", answer: "" },
        { question: "Q3: How much melatonin is there per inhale?", answer: "" },
        { question: "Q4: Is it an e-cigarette or tobacco product?", answer: "" },
        { question: "Q5: What's in it?", answer: "" },
        { question: "Q6: What's not in it?", answer: "" },
        { question: "Q7: How long does it last?", answer: "" },
        { question: "Q8: How do I know it has run out/died?", answer: "" },
    ];

    return (
        <div className='flex gap-[114px]'>

            <div className='flex flex-col gap-10 text-lg mt-2'>
                <p className='text-[#12305B] font-bold'>Sleepstiq Product</p>
                <p className='text-[#12305B]'>Order</p>
                <p className='text-[#12305B]'>Melantolin</p>

            </div>

            <div className="max-w-2xl">
                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={index === openIndex}
                        borderTop={index === 0}
                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;