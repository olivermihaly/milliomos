import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import "./styles/styles.css";

const question = {
    question: "Melyik nem a szarvasmarha emésztőszerve?",
    answers: [
        {
            label: "A",
            answer: "recés gyomor",
            correct: false,
        },
        {
            label: "B",
            answer: "leveles gyomor",
            correct: false,
        },
        {
            label: "C",
            answer: "oltó gyomor",
            correct: true,
        },
        {
            label: "D",
            answer: "ürbél",
            correct: false,
        },
    ],
};

const question2 = {
    question: "Melyik ne?",
    answers: [
        {
            label: "A",
            answer: "recés",
            correct: false,
        },
        {
            label: "B",
            answer: "leveles",
            correct: false,
        },
        {
            label: "C",
            answer: "oltó",
            correct: true,
        },
        {
            label: "D",
            answer: "ürbél 2wq35 123",
            correct: false,
        },
    ],
};

const a = [question, question2];

function App() {
    return (
        <div className="main-container">
            <GameScreen question={a[0]} />
        </div>
    );
}

export default App;
