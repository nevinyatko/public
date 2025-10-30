import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Eye, ChevronRight } from "lucide-react";
import type { Question } from "../data/questions";

interface QuestionScreenProps {
  question: Question;
  currentQuestionIndex: number;
  onNext: () => void;
}

export function QuestionScreen({ question, currentQuestionIndex, onNext }: QuestionScreenProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    { q: question.question1, a: question.answer1, label: "Vérification" },
    { q: question.question2, a: question.answer2, label: "QSER" },
    { q: question.question3, a: question.answer3, label: "1ers Secours" }
  ];

  const current = questions[currentQuestionIndex];

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
          <CardTitle className="text-2xl">Question {currentQuestionIndex + 1}/3</CardTitle>
          <CardDescription className="text-lg">{current.label}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="p-6 bg-blue-50 rounded-lg">
              <p className="text-lg leading-relaxed">{current.q}</p>
            </div>

            {showAnswer && (
              <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                <p className="text-lg leading-relaxed">{current.a}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            {!showAnswer ? (
              <Button onClick={() => setShowAnswer(true)} className="w-full text-lg h-12">
                <Eye className="mr-2 h-5 w-5" />
                Afficher la réponse
              </Button>
            ) : (
              <Button onClick={handleNext} className="w-full text-lg h-12">
                {currentQuestionIndex < 2 ? "Question suivante" : "Voir le résumé"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            )}
          </div>

          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentQuestionIndex
                    ? "bg-blue-600"
                    : index < currentQuestionIndex
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
