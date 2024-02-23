// Question.js
import React, { useState } from 'react';

function Question({ questionData, onNext }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Check if selected option is correct
    if (selectedOption === questionData.answer) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
    onNext(); // Move to the next question
  };

  return (
    <div>
      <h3>{questionData.question}</h3>
      <ul>
        <li onClick={() => handleOptionSelect(questionData.answer)}>
          {questionData.answer}
        </li>
        <li onClick={() => handleOptionSelect(questionData.decoy1)}>
          {questionData.decoy1}
        </li>
        <li onClick={() => handleOptionSelect(questionData.decoy2)}>
          {questionData.decoy2}
        </li>
        <li onClick={() => handleOptionSelect(questionData.decoy3)}>
          {questionData.decoy3}
        </li>
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Question;
