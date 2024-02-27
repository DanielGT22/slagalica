import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions(); // Fetch questions when component mounts
  }, []);

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const response = await fetch('http://localhost:3001/quizzes', {
        headers: {
          Authorization: `Bearer ${token}`,
      
        },
      });
      const data = await response.json();
      console.log(data.content);
      console.log(token);
      setQuestions(data.content); // Set questions fetched from API
    } catch (error) {
      console.error('Error fetching questions: ', error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Check if selected option is correct
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of quiz
      alert(`Quiz completed! Your score is ${score}/${questions.length}`);
    }
  };

  return (
    <div>
      {questions.length > 0 && currentQuestion < questions.length ? (
        <div className='pt-5'>
          {/* <h3>{questions[currentQuestion].question}</h3>
          <ul>
            <li onClick={() => handleOptionSelect(questions[currentQuestion].answer)}>
              {questions[currentQuestion].answer}
            </li>
            <li onClick={() => handleOptionSelect(questions[currentQuestion].decoy1)}>
              {questions[currentQuestion].decoy1}
            </li>
            <li onClick={() => handleOptionSelect(questions[currentQuestion].decoy2)}>
              {questions[currentQuestion].decoy2}
            </li>
            <li onClick={() => handleOptionSelect(questions[currentQuestion].decoy3)}>
              {questions[currentQuestion].decoy3}
            </li>
          </ul>
          <button onClick={handleSubmit}>Submit</button> */}
          <div className="Container d-flex justify-content-center  align-content-center">
            <div className='w-50 text-center'>
            <Row>
              <Col xs={12} className='bg-warning border border-2  rounded border-black p-1 '>
                <h1 className='bg-danger mb-0 border border-2 border-black rounded p-3 text-white '>{questions[currentQuestion].question}</h1>
              </Col>
            </Row>
           
            <Row className='mt-3'>
              <Col xs={6} className='text-center p-1 bg-warning rounded border border-2 border-black'> 
              <Button className='  border border-2 border-black bg-white text-black fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].answer)}>
              {questions[currentQuestion].answer}
            </Button>
              </Col>
              <Col xs={6} className='text-center p-1 bg-warning rounded border border-2 border-black'> 
              <Button className='border border-2 border-black bg-white text-black fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].decoy1)}>
              {questions[currentQuestion].decoy1}
            </Button>
              </Col>
            </Row>
            <Row className='mt-3'>
            <Col xs={6} className='text-center p-1 bg-warning rounded border border-2 border-black'> 
              <Button className='border border-2 border-black bg-white text-black fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].decoy2)}>
              {questions[currentQuestion].decoy2}
            </Button>
              </Col>
              <Col xs={6} className='text-center p-1 bg-warning rounded border border-2 border-black'> 
              <Button className='border border-2 border-black bg-white text-black fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].decoy3)}>
              {questions[currentQuestion].decoy3}
            </Button>
              </Col>
            </Row>
            </div>
          </div>
        </div>
      )
       : (
        <p>No more questions!</p>
      )}
    </div>
  );
}

export default Quiz;
