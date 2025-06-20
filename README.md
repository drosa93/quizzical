# 🧠 Sports Trivia Quiz App

A dynamic sports trivia quiz built with **Next.js App Router** and **Tailwind CSS**, powered by the [Open Trivia Database API](https://opentdb.com/). This app challenges users with multiple-choice questions, tracks their answers, and displays a results screen with correct and incorrect answers highlighted.

---

## 🚀 Features

- ✅ **Live sports trivia** pulled from OpenTDB API
- 🔄 **Randomized answer order** for each question
- 🧠 **User answer tracking** via `useState`
- 💾 **localStorage integration** to persist quiz data across pages
- 📊 **Score calculation** and post-quiz review screen
- 🧭 **Next.js App Router** for routing between quiz and results
- 🎨 **Tailwind CSS styling** for responsive, modern UI
- 🔐 **Client-side rendering** for fast UX

---

## 📡 API Source

Data is fetched from: https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple


- Category: Sports
- Type: Multiple Choice
- Difficulty: Medium
- Amount: 10 questions

Each question includes:
- The question text
- One correct answer
- Three incorrect answers

---

✅ How It Works
User starts the quiz on the homepage.

Questions are fetched and displayed with shuffled answers.

Selections are stored in React state.

On quiz submission:

Questions and answers are saved to localStorage.

User is routed to the /checked-questions page.

The result page reads from localStorage:

Shows each question

Highlights correct and incorrect selections

Displays total score

📌 Ideas for Future Improvements
Add difficulty and category selectors

Timer per question

Persist scores in a Supabase database

Animations for transitions

Track score history

💡 Credits
Trivia Data: Open Trivia Database

## 🗂 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenTDB API](https://opentdb.com/)
- `localStorage` for client-side persistence



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
