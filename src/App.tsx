import { useState } from "react";
import { ModeSelectionScreen } from "./components/ModeSelectionScreen";
import { BlockSelectionScreen } from "./components/BlockSelectionScreen";
import { ThemeSelectionScreen } from "./components/ThemeSelectionScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { ThemeQuestionScreen } from "./components/ThemeQuestionScreen";
import { SummaryScreen } from "./components/SummaryScreen";
import { getQuestionByBlock, getRandomQuestionByTheme } from "./data/questions";
import type { Question, ThemeQuestion, Theme } from "./data/questions";

type Screen = "modeSelection" | "blockSelection" | "themeSelection" | "blockQuestion" | "themeQuestion" | "summary";

export default function App() {
  const [screen, setScreen] = useState<Screen>("modeSelection");
  const [currentBlockQuestion, setCurrentBlockQuestion] = useState<Question | null>(null);
  const [currentThemeQuestion, setCurrentThemeQuestion] = useState<ThemeQuestion | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const handleModeSelection = (mode: "theme" | "block") => {
    if (mode === "theme") {
      setScreen("themeSelection");
    } else {
      setScreen("blockSelection");
    }
  };

  const handleThemeSelection = (theme: Theme) => {
    setSelectedTheme(theme);
    const question = getRandomQuestionByTheme(theme);

    if (question) {
      setCurrentThemeQuestion(question);
      setScreen("themeQuestion");
    } else {
      alert(`Aucune question trouvée pour le thème ${theme}.`);
    }
  };

  const handleBlockStart = (blockNumber: string) => {
    const question = getQuestionByBlock(blockNumber);

    if (question) {
      setCurrentBlockQuestion(question);
      setCurrentQuestionIndex(0);
      setScreen("blockQuestion");
    } else {
      alert(`Aucune question trouvée pour le bloc ${blockNumber}. Veuillez choisir un autre bloc.`);
    }
  };

  const handleBlockQuestionNext = () => {
    if (currentQuestionIndex < 2) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen("summary");
    }
  };

  const handleThemeQuestionNext = () => {
    if (selectedTheme) {
      const nextQuestion = getRandomQuestionByTheme(selectedTheme);
      if (nextQuestion) {
        setCurrentThemeQuestion(nextQuestion);
      }
    }
  };

  const handleNewTest = () => {
    setCurrentBlockQuestion(null);
    setCurrentThemeQuestion(null);
    setCurrentQuestionIndex(0);
    setSelectedTheme(null);
    setScreen("modeSelection");
  };

  const handleBackToModeSelection = () => {
    setScreen("modeSelection");
  };

  return (
    <>
      {screen === "modeSelection" && (
        <ModeSelectionScreen onSelectMode={handleModeSelection} />
      )}
      {screen === "blockSelection" && (
        <BlockSelectionScreen
          onStart={handleBlockStart}
          onBack={handleBackToModeSelection}
        />
      )}
      {screen === "themeSelection" && (
        <ThemeSelectionScreen
          onSelectTheme={handleThemeSelection}
          onBack={handleBackToModeSelection}
        />
      )}
      {screen === "blockQuestion" && currentBlockQuestion && (
        <QuestionScreen
          question={currentBlockQuestion}
          currentQuestionIndex={currentQuestionIndex}
          onNext={handleBlockQuestionNext}
          onReset={handleNewTest}
        />
      )}
      {screen === "themeQuestion" && currentThemeQuestion && (
        <ThemeQuestionScreen
          question={currentThemeQuestion}
          onNext={handleThemeQuestionNext}
          onReset={handleNewTest}
        />
      )}
      {screen === "summary" && currentBlockQuestion && (
        <SummaryScreen question={currentBlockQuestion} onNewTest={handleNewTest} />
      )}
    </>
  );
}
