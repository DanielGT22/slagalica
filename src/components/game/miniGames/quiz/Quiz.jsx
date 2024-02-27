import React, { useState, useEffect } from 'react';

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
      const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwY2JjMTBjYS1jMGIyLTRiN2ItYjRkNS04MjNmMmM0MGExMzUiLCJpYXQiOjE3MDc4MTU0NjMsImV4cCI6MTcwODQyMDI2M30.Or4QYgAg0YnXmbrdy8GgSzoWW_ePXjcvgRR3T736N3Y';
      const response = await fetch('http://localhost:3001/quizzes', {
        headers: {
          Authorization: `Bearer ${token}`,
      
        },
      });
      const data = await response.json();
      console.log(data);
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
      {/* {questions.length > 0 && currentQuestion < questions.length ? (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <p>No more questions!</p>
      )} */}
    </div>
  );
}

export default Quiz;
