import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AskQuestionPage() {
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")); 

  const handleSubmit = async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user || !user.email) {
    alert("⚠️ You must be logged in to post a question.");
    return;
  }

  const payload = {
    user_email: user.email,
    subject,
    question,
  };

  try {
    const response = await fetch("http://localhost:5000/api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Something went wrong");
    }

    setSubmitted(true);
    setSubject("");
    setQuestion("");
    setTimeout(() => setSubmitted(false), 4000);
  } catch (err) {
    alert("❌ Failed to send question: " + err.message);
  }
};


  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: "url('/images/4.jpeg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 dark:bg-white/10 backdrop-blur-lg text-foreground rounded-xl shadow-xl max-w-2xl w-full p-8 border border-white/30 dark:border-white/20"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Ask Your Question</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-md bg-white/90 dark:bg-muted border border-teal-400 dark:border-muted shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your question..."
            rows="6"
            className="w-full px-4 py-3 rounded-md bg-white/90 dark:bg-muted border border-teal-400 dark:border-muted shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-md shadow-md transition-all"
            >
              Post
            </button>
          </div>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-6 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-md text-green-800 dark:text-green-100 flex items-center gap-3"
            >
              <CheckCircle className="text-green-500 dark:text-green-300" />
              <div>
                <p className="font-semibold">Your question has been posted!</p>
                <p className="text-sm">We’ll review and respond shortly.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}







