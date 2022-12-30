import { useEffect } from "react";

export default function GameScreen({ question }: { question: any }) {
    return (
        <div className="game-container">
            <div className="logo"></div>
            <div className="question">
                <span>{question.question}</span>
            </div>
            <div className="answer-container">
                {question.answers.map((answer: any, index: number) => {
                    return <AnswerButton correct={answer.correct} label={answer.label} answer={answer.answer} key={index} />;
                })}
            </div>
        </div>
    );
}

function AnswerButton({ label, answer, correct }: { label: string; answer: string; correct: boolean }) {
    return (
        <button className="answer-button">
            <span className="answer-label">{label}:</span> {answer}
        </button>
    );
}
