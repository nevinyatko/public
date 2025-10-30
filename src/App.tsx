import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { SummaryScreen } from "./components/SummaryScreen";
import { getQuestionByBlock } from "./data/questions";
import type { Question } from "./data/questions";

type Screen = "welcome" | "question" | "summary";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleStart = (blockNumber: string) => {
    const question = getQuestionByBlock(blockNumber);
    
    if (question) {
      setCurrentQuestion(question);
      setCurrentQuestionIndex(0);
      setScreen("question");
    } else {
      alert(`Aucune question trouvée pour le bloc ${blockNumber}. Veuillez choisir un autre bloc.`);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < 2) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen("summary");
    }
  };

  const handleNewTest = () => {
    setCurrentQuestion(null);
    setCurrentQuestionIndex(0);
    setScreen("welcome");
  };

  return (
    <>
      {screen === "welcome" && <WelcomeScreen onStart={handleStart} />}
      {screen === "question" && currentQuestion && (
        <QuestionScreen
          question={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          onNext={handleNext}
        />
      )}
      {screen === "summary" && currentQuestion && (
        <SummaryScreen question={currentQuestion} onNewTest={handleNewTest} />
      )}
    </>
  );
}
