"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState("");
  const router = useRouter();

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
      );
      const data = await res.json();

      // Add shuffled answers to each question
      const processed = data.results.map(q => {
        const shuffledAnswers = shuffleArray([
          ...q.incorrect_answers,
          q.correct_answer,
        ]);
        return {
          question: q.question,
          correct: q.correct_answer,
          answers: shuffledAnswers,
        };
      });

      setQuestions(processed);
      setSelectedAnswers(Array(processed.length).fill(null));
    }

    fetchQuestions();
  }, []);

  function setUserAnswer(qIndex, answer) {
    const updated = [...selectedAnswers];
    updated[qIndex] = answer;

    setSelectedAnswers(updated);
  }
  const handleSubmit = () =>{
    localStorage.setItem("quizData", JSON.stringify(questions));
    localStorage.setItem("userAnswers", JSON.stringify(selectedAnswers));
    router.push('/checked-questions')
  }

  if (error) return <p>{error}</p>;
  if (questions.length === 0) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-8 flex items-left justify-center flex-col">
       <img src="/yellowBlob.png" alt="blob" className="fixed top-0 right-0"/>
       <img src="/blob5.png" alt="blob" className="fixed bottom-0 left-0"/>
        
      {questions.map((q, index) => {
        return (
          <div key={index}>
            <h2
              className="font-bold text-lg mb-2 text-indigo-900"
              dangerouslySetInnerHTML={{ __html: q.question }}
            />
            <ul className="grid gap-2">
              {q.answers.map((answer, i) => {
                const isSelected = selectedAnswers[index] === answer;
                return (
                  <li
                    key={i}
                    className={`p-2 border rounded cursor-pointer ${
                      isSelected ? "bg-indigo-300" : "hover:bg-indigo-100"
                    }`}
                    dangerouslySetInnerHTML={{ __html: answer }}
                    onClick={() => setUserAnswer(index, answer)}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
      <Button
        onClick={handleSubmit}
        style={{
          border: "1px solid",
          borderColor: "#4D5B9E",
          backgroundColor: "#4D5B9E",
          color: "white",
          borderRadius: "8px",
        }}
        >
        Check Answers
      </Button> 
    </div>
  );
}
