import { useState, useEffect } from 'react';
import cssQuestions from './Questions/CssQuestions';
import htmlquestions from './Questions/HtmlQuestions';

export const useTimer = (initialTimeInSeconds) => {
    const [time, setTime] = useState(initialTimeInSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [initialTimeInSeconds]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const format = (value) => (value < 10 ? `0${value}` : value);
        return `${format(minutes)}:${format(remainingSeconds)}`;
    };

    const resetTimer = () => {
        setTime(initialTimeInSeconds);
    };


    return { time, formatTime, resetTimer };
};

export const QuizSelection = () => {
    const [selectedQuiz, setSelectedQuiz] = useState('HTML');
    const [score, setScore] = useState(0);
    const initialTimeInSeconds = 2 * 60; // 2 minutes

    const selectQuiz = (quiz) => {
        setSelectedQuiz(quiz);
        // Reset the score to 0 when quiz selection changes
        setScore(0);
    }

    const getQuestionsForSelectedQuiz = () => {
        switch (selectedQuiz) {
            case 'HTML':
                return htmlquestions;
            case 'CSS':
                return cssQuestions;
            // Add cases for other quiz options as needed
            default:
                return [];
        }
    };

    return { selectedQuiz, selectQuiz, getQuestionsForSelectedQuiz, score, setScore, initialTimeInSeconds };
};