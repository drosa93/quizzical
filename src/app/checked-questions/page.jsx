"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function CheckedQuestions() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const storedQuestions = localStorage.getItem("quizData");
    const storedAnswers = localStorage.getItem("userAnswers");

    if (storedAnswers && storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
      setUserAnswers(JSON.parse(storedAnswers));
    } else {
      console.warn("Nothing found in localStorage.");
    }
  }, []);

  const score = questions.reduce((total, q, index) => {
    return userAnswers[index] === q.correct ? total + 1 : total;
  }, 0);

  const handleSubmit = () => {
    router.push("/landing-page");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-8">
      {questions.map((q, index) => (
        <div key={index}>
          <h2
            className="font-bold text-lg mb-2  text-indigo-900"
            dangerouslySetInnerHTML={{ __html: q.question }}
          />
          <ul className="grid gap-2">
            {q.answers.map((answer, i) => {
              const isCorrect = answer === q.correct;
              const isSelected = answer === userAnswers[index];
              const isWrongSelected = isSelected && !isCorrect;

              let styles = "p-2 border rounded";
              if (isCorrect) styles += " bg-green-200";
              if (isWrongSelected) styles += " bg-red-300";
              if (!isSelected && !isCorrect) styles += " bg-gray-100";

              return (
                <li
                  key={i}
                  className={styles}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </ul>
        </div>
      ))}
      <div className="flex flex-row items-center justify-evenly">
        <img src="/yellowBlob.png" alt="blob" className="fixed top-0 right-0"/>
       <img src="/blob5.png" alt="blob" className="fixed bottom-0 left-0"/>
        <h2 className="text-indigo-900 font-bold text-xl">
          You Got {score}/10 questions right.
        </h2>
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
          Try Again
        </Button>
      </div>
    </div>
  );
}
