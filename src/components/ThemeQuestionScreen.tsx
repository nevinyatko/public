import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Eye, ChevronRight, RotateCcw } from "lucide-react";
import type { ThemeQuestion } from "../data/questions";

interface ThemeQuestionScreenProps {
  question: ThemeQuestion;
  onNext: () => void;
  onReset: () => void;
}

export function ThemeQuestionScreen({ question, onNext, onReset }: ThemeQuestionScreenProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const getThemeLabel = () => {
    switch (question.theme) {
      case "verification":
        return "Vérification";
      case "qser":
        return "QSER";
      case "secours":
        return "1ers Secours";
    }
  };

  const handleNext = () => {
    setShowAnswer(false);
    onNext();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-base px-3 py-1">
              Bloc {question.block}
            </Badge>
            <Badge variant={question.type === "VI" ? "default" : "outline"} className="text-base px-3 py-1">
              {question.type === "VI" ? "Vérification Intérieure" : "Vérification Extérieure"}
            </Badge>
          </div>
          <CardTitle className="text-2xl">{getThemeLabel()}</CardTitle>
          <CardDescription className="text-lg">Question sur le thème {getThemeLabel()}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="px-6 py-10 bg-blue-50 rounded-lg">
              <p className="text-lg leading-relaxed">{question.question}</p>
            </div>

            {showAnswer && (
              <div className="px-6 py-10 bg-green-50 rounded-lg">
                <p className="text-lg leading-relaxed">
                  {question.answer && question.answer.trim() !== '' ? question.answer : 'Bonne chance !'}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {!showAnswer ? (
                <Button onClick={() => setShowAnswer(true)} className="w-full text-lg h-12">
                  <Eye className="mr-2 h-5 w-5" />
                  Afficher la réponse
                </Button>
              ) : (
                <Button onClick={handleNext} className="w-full text-lg h-12">
                  Question suivante
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>

            <Button
              onClick={onReset}
              variant="outline"
              className="w-full text-base h-10"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Réinitialiser la session
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
