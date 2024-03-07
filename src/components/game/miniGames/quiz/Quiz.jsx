import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Question from './Question';
import { Link, NavLink } from 'react-router-dom';

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

  const moveToNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Increment score if answer is correct
    }
    setCurrentQuestion(currentQuestion + 1); // Move to the next question
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight: "100vh"}}>
      {/* {questions.length > 0 && currentQuestion < questions.length ? (
        <div className='pt-5'>
          <div className="Container d-flex justify-content-center  align-content-center">
            <div className='w-50 text-center'>
            <Row>
              <Col xs={12} className='bg-dark border border-2 border-white rounded  p-1 '>
                <h1 className=' mb-0  rounded p-3 text-white '>{questions[currentQuestion].question}</h1>
              </Col>
            </Row>
           
            <Row className='mt-3 g-3'>
              <Col xs={5} className='text-center p-1 bg-dark rounded border border-2 border-white'> 
              <Button className='  border border-2 border-white bg-dark text-white fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].answer)}>
              {questions[currentQuestion].answer}
            </Button>
              </Col>
              <Col xs={2}></Col>
              <Col xs={5} className='text-center p-1 bg-dark rounded border border-2 border-white'> 
              <Button className='  border border-2 border-white bg-dark text-white fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].decoy1)}>
              {questions[currentQuestion].decoy1}
            </Button>
              </Col>
            </Row>
            <Row className='mt-3 g-3'>
            <Col xs={5} className='text-center p-1 bg-dark rounded border border-2 border-white'> 
            <Button className='  border border-2 border-white bg-dark text-white fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].decoy2)}>
              {questions[currentQuestion].decoy2}
            </Button>
              </Col>
              <Col xs={2}></Col>
              <Col xs={5} className='text-center p-1 bg-dark rounded border border-2 border-white'> 
              <Button className='  border border-2 border-white bg-dark text-white fs-3 w-100' onClick={() => handleOptionSelect(questions[currentQuestion].decoy3)}>
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
      )} */}
       {questions.length > 0 && currentQuestion < questions.length ? (
        <div className='pt-5 w-50 '>
          <Question 
            questionData={questions[currentQuestion]} 
            onNext={moveToNextQuestion} 
          />
        </div>
      ) : ( <div className='d-flex flex-column justify-content-center align-items-center text-white' style={{minHeight:"100vh"}}> 
        <div className='d-flex flex-column align-items-center justify-content-around' style={{minHeight:"30vh"}}>
          <h2>No more questions!</h2>
        
        <h3 className='text-center'>Your score is: <br /> {score}/{questions.length}</h3>
        </div>
        <Button  onClick={() => window.location.href = "/home"}>Main Menu</Button>
        </div>)}
        
    </div>
  );
}

export default Quiz;
