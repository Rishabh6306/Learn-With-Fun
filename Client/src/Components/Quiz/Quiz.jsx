import React, { useState, useEffect } from 'react';
import { htmlquestions, cssquestions, javaScriptquestions, reactquestions, pythonquestions } from './Questions/AllQuestions';
import QuizUI from './QuizUI';

function Quiz() {
  const initialSection = 'HTML';

  const [questions, setQuestions] = useState(htmlquestions);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(120);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [isOptionSelectedForQuestion, setIsOptionSelectedForQuestion] = useState(Array(htmlquestions.length).fill(null));
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const getLocalStorageKey = (section) => `quizScore${section}`;

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(interval);
        setIsQuizOver(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    if (isQuizOver && selectedSection) {
      localStorage.setItem(getLocalStorageKey(selectedSection), score);
    }
  }, [isQuizOver, score, selectedSection]);

  const handleOptionSelect = (selectedOption) => {
    const updatedFlags = [...isOptionSelectedForQuestion];
    updatedFlags[currentQuestionIndex] = selectedOption;
    setIsOptionSelectedForQuestion(updatedFlags);

    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 2);
    }
  };


  const handleSectionClick = (section) => {
    let selectedQuestions = [];

    switch (section) {
      case 'HTML':
        selectedQuestions = htmlquestions.map((q) => ({ ...q, section: 'HTML' }));
        break;
      case 'CSS':
        selectedQuestions = cssquestions.map((q) => ({ ...q, section: 'CSS' }));
        break;
      case 'JavaScript':
        selectedQuestions = javaScriptquestions.map((q) => ({ ...q, section: 'JavaScript' }));
        break;
      case 'ReactJS':
        selectedQuestions = reactquestions.map((q) => ({ ...q, section: 'ReactJS' }));
        break;
      case 'Python':
        selectedQuestions = pythonquestions.map((q) => ({ ...q, section: 'Python' }));
        break;
      default:
        selectedQuestions = htmlquestions.map((q) => ({ ...q, section: 'HTML' }));
        break;
    }

    setQuestions(selectedQuestions);
    setSelectedSection(section);
    setIsQuizOver(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(300);
    setShowCorrectAnswers(false);

    const resetFlags = Array(selectedQuestions.length).fill(null);
    setIsOptionSelectedForQuestion(resetFlags);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem(getLocalStorageKey(selectedSection), score);
      setIsQuizOver(true);
    }
  };

  const handleRestartQuiz = () => {
    setIsQuizOver(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(120);
    setShowCorrectAnswers(false);

    const clearedQuestions = questions.map((q) => ({ ...q, selectedAnswer: null }));

    setQuestions(clearedQuestions);
    const resetFlags = Array(clearedQuestions.length).fill(null);
    setIsOptionSelectedForQuestion(resetFlags);
  };

  const passThreshold = 60;
  const passingScore = (questions.length * passThreshold) / 100;
  const hasPassed = score >= passingScore;

  const indexToLetter = (index) => String.fromCharCode(97 + index);

  return (
    <QuizUI handleNextQuestion={handleNextQuestion} handleOptionSelect={handleOptionSelect} handleRestartQuiz={handleRestartQuiz} handleSectionClick={handleSectionClick} hasPassed={hasPassed} score={score} timer={timer} questions={questions} currentQuestionIndex={currentQuestionIndex} isOptionSelectedForQuestion={isOptionSelectedForQuestion} showCorrectAnswers={showCorrectAnswers} indexToLetter={indexToLetter} isQuizOver={isQuizOver} />
  );
}

export default Quiz;