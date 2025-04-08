"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react"; // Add 'use' import

interface PageProps {
  params: any;
}

export default function TestPage({ params }: PageProps) {
  // Unwrap params with React.use() before destructuring
  const unwrappedParams = use(params);
  const { type, title } = unwrappedParams;
  
  const decodedTitle = decodeURIComponent(title.toLowerCase());
  const router = useRouter();

  const titleToIdMap: Record<string, string> = {
    "iv-characteristics": "1",
    "numerical aperture": "2",
    "wedge shape": "3",
    "zener diode": "4",
    "newton's ring": "5",
    "hall effect": "6",
    "planck's constant": "7",
    "he-ne laser": "8",
  };

  const id = titleToIdMap[decodedTitle];

  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);



    useEffect(() => {
    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/${type === 'pre-test' ? 'pre-questions' : 'post-questions'}/${id}`);
        const data = await res.json();
        if (data.success) {
        setQuestions(data.questions);
        }
    };
    fetchData();
    }, [id, type]);


  const handleOptionChange = (qIndex: number, selected: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: selected }));
  };

  const handleSubmit = () => {
    const allAnswered = questions.every((_, index) => answers.hasOwnProperty(index));
    if (!allAnswered) {
      alert("⚠️ Please answer all the questions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const getBgColor = (q: any, option: string, index: number) => {
    const selected = answers[index];
    if (!submitted) return "";

    if (option === selected && selected === q.answer) return "bg-green-200";
    if (option === selected && selected !== q.answer) return "bg-red-200";

    return "";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 border">
        <h1 className="text-2xl font-bold mb-6 text-center capitalize">
          {type === "pre-test" ? "Pre-Test" : "Post-Test"} for Experiment: {decodedTitle}
        </h1>

        {questions.length === 0 && (
          <p className="text-center text-gray-500">Loading questions...</p>
        )}

        {questions.map((q, index) => (
          <div key={index} className="mb-6">
            <p className="font-medium mb-2">
              {index + 1}. {q.question}
            </p>

            {q.options.map((option: string, i: number) => (
              <label
                key={i}
                className={`block p-2 rounded-md cursor-pointer transition-colors duration-200 ${getBgColor(
                  q,
                  option,
                  index
                )}`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  disabled={submitted}
                  onChange={() => handleOptionChange(index, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}

            {submitted && (
              <p
                className={`mt-2 text-sm font-semibold ${
                  answers[index] === q.answer
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {answers[index] === q.answer
                  ? `✅ Correct Answer: ${q.answer}`
                  : `❌ Incorrect. Correct Answer: ${q.answer}`}
              </p>
            )}
          </div>
        ))}

        {!submitted && questions.length > 0 && (
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        )}

        {submitted && (
          <div className="text-center mt-6">
            <button
              onClick={() => router.push("/experiments")}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Go Back to Experiments
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
