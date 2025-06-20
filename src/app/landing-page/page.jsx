"use client"
import { Button } from "@mui/material";
import Link from "next/link";

export default function LandingPage() {
  return (
    
    <div className="flex items-center justify-center h-screen flex-col text-center">
      <img src="/blobs.png" alt="blob" className="absolute top-0 right-0"/>
      <img src="/blueBlob.png" alt="blob" className="absolute bottom-0 left-0"/>
      <h1 className="text-indigo-900 text-3xl font-bold m-3">Quizzical</h1>
      <h3 className="text-indigo-950 m-3">Let's test your sports knowledge</h3>
      <Link href="./questions">
     <Button
  sx={{
    backgroundColor: '#4D5B9E',
    color: '#fff',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#3b487a',
    },
  }}
>Start Quiz</Button>
</Link>
    </div>
  );
}
