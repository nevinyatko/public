import { useState } from "react";
import { ModeSelectionScreen } from "./components/ModeSelectionScreen";
import { BlockSelectionScreen } from "./components/BlockSelectionScreen";
import { ThemeSelectionScreen } from "./components/ThemeSelectionScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { ThemeQuestionScreen } from "./components/ThemeQuestionScreen";
import { SummaryScreen } from "./components/SummaryScreen";
import { getQuestionByBlock, getRandomQuestionByTheme, updateQuestionWeight } from "./data/questions";
import type { Question, ThemeQuestion, Theme } from "./data/questions";

type Screen = "modeSelection" | "blockSelection" | "themeSelection" | "blockQuestion" | "themeQuestion" | "summary";

export default function App() {
  const [screen, setScreen] = useState<Screen>("modeSelection");
  const [currentBlockQuestion, setCurrentBlockQuestion] = useState<Question | null>(null);
  const [currentThemeQuestion, setCurrentThemeQuestion] = useState<ThemeQuestion | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  // Track knowledge level for each question
  // Map of question text -> boolean (true = knows well, false = needs work)
  const [questionKnowledge, setQuestionKnowledge] = useState<Map<string, boolean>>(new Map());

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

  const handleKnowledgeLevel = (questionText: string, knowsWell: boolean) => {
    setQuestionKnowledge((prev: Map<string, boolean>) => {
      const newMap = new Map(prev);
      newMap.set(questionText, knowsWell);
      return newMap;
    });

    // Store in localStorage for persistence
    const stored = JSON.parse(localStorage.getItem('questionKnowledge') || '[]');
    const updated = stored.filter((item: any) => item.question !== questionText);
    updated.push({ question: questionText, knowsWell, timestamp: Date.now() });
    localStorage.setItem('questionKnowledge', JSON.stringify(updated));

    // Update question weight for adaptive learning
    if (selectedTheme) {
      updateQuestionWeight(selectedTheme, questionText, knowsWell);
    }
  };

  const handleThemeQuestionNext = () => {
    if (selectedTheme) {
      // Exclude the current question to prevent immediate repeats
      const nextQuestion = getRandomQuestionByTheme(
        selectedTheme,
        currentThemeQuestion?.question
      );
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
          onKnowledgeLevel={handleKnowledgeLevel}
        />
      )}
      {screen === "summary" && currentBlockQuestion && (
        <SummaryScreen question={currentBlockQuestion} onNewTest={handleNewTest} />
      )}
    </>
  );
}
