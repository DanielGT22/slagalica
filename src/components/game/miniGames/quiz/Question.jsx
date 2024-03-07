// Question.js
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function Question({ questionData, onNext }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Check if selected option is correct
    if (selectedOption === questionData.answer) {
    
      onNext(true); // Move to the next question with correct flag
    } else {
     
      onNext(false); // Move to the next question with incorrect flag
    }
    setSelectedOption('');
  };

  return (
    <div className='text-white text-center d-flex justify-content-center '>
      <div className='w-75'>
      <Row className='mb-4 '>
      <h3>{questionData.question}</h3>
      </Row>
      <Row className='mb-4'>
     
        <Col xs={12} md={6}>
        <Button
              className={`btn-dark border border-2 border-white w-50 ${selectedOption === questionData.answer ? 'bg-success' : ''}`}
              onClick={() => handleOptionSelect(questionData.answer)}
            >  {questionData.answer}</Button>
        </Col>
        <Col xs={12} md={6} >
        <Button
              className={`btn-dark border border-2 border-white w-50 ${selectedOption === questionData.decoy1 ? 'bg-success' : ''}`}
              onClick={() => handleOptionSelect(questionData.decoy1)}
            > {questionData.decoy1}</Button>
          </Col>
        </Row>
        <Row className='mb-4'>
        <Col xs={12} md={6} >
        <Button
              className={`btn-dark border border-2 border-white w-50 ${selectedOption === questionData.decoy2 ? 'bg-success' : ''}`}
              onClick={() => handleOptionSelect(questionData.decoy2)}
            >   {questionData.decoy2}</Button>
          </Col>
        <Col xs={12} md={6} >
        <Button
              className={`btn-dark border border-2 border-white w-50 ${selectedOption === questionData.decoy3 ? 'bg-success' : ''}`}
              onClick={() => handleOptionSelect(questionData.decoy3)}
            >  {questionData.decoy3}</Button>
          </Col>
        </Row>
      <Button className='btn-dark border-white ' onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}

export default Question;
