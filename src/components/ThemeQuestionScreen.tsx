import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Eye, RotateCcw, Check } from "lucide-react";
import type { ThemeQuestion } from "../data/questions";

interface ThemeQuestionScreenProps {
  question: ThemeQuestion;
  onNext: () => void;
  onReset: () => void;
  onKnowledgeLevel?: (questionText: string, knowsWell: boolean) => void;
}

export function ThemeQuestionScreen({ question, onNext, onReset, onKnowledgeLevel }: ThemeQuestionScreenProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleKnowsWell = () => {
    if (onKnowledgeLevel) {
      onKnowledgeLevel(question.question, true);
    }

    // Vibrate if supported
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    // Wait a moment then go to next question
    setTimeout(() => {
      setShowAnswer(false);
      onNext();
    }, 300);
  };

  const handleNeedsWork = () => {
    if (onKnowledgeLevel) {
      onKnowledgeLevel(question.question, false);
    }

    // Vibrate if supported
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    // Wait a moment then go to next question
    setTimeout(() => {
      setShowAnswer(false);
      onNext();
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary" className="text-xs sm:text-sm px-2 py-1">
              {question.blocks && question.blocks.length > 1
                ? `Apparaît dans ${question.blocks.length} blocs: ${question.blocks.join(', ')}`
                : `Bloc ${question.block}`}
            </Badge>
            <Badge variant={question.type === "VI" ? "default" : "outline"} className="text-xs sm:text-sm px-2 py-1">
              {question.type === "VI" ? "VI" : "VE"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="px-6 py-10 rounded-lg" style={{ backgroundColor: '#f1f5f9' }}>
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
            {!showAnswer ? (
              <Button onClick={() => setShowAnswer(true)} className="w-full text-lg h-12">
                <Eye className="mr-2 h-5 w-5" />
                Afficher la réponse
              </Button>
            ) : (
              <div className="space-y-4">
                {/* Rating buttons */}
                <div className="flex justify-center items-center py-6" style={{ gap: '2rem' }}>
                  {/* Button: I know it well */}
                  <button
                    onClick={handleKnowsWell}
                    className="flex flex-col items-center transition-transform hover:scale-105 active:scale-95"
                    style={{ gap: '0.5rem' }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full shadow-lg transition-all hover:shadow-xl"
                      style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#22c55e' }}
                    >
                      <Check className="text-white" style={{ width: '1.75rem', height: '1.75rem' }} strokeWidth={3} />
                    </div>
                    <span className="text-center text-sm" style={{ color: '#15803d' }}>
                      Acquis
                    </span>
                  </button>

                  {/* Button: I don't know it well yet */}
                  <button
                    onClick={handleNeedsWork}
                    className="flex flex-col items-center transition-transform hover:scale-105 active:scale-95"
                    style={{ gap: '0.5rem' }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full shadow-lg transition-all hover:shadow-xl"
                      style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#f97316' }}
                    >
                      <RotateCcw className="text-white" style={{ width: '1.75rem', height: '1.75rem' }} strokeWidth={3} />
                    </div>
                    <span className="text-center text-sm" style={{ color: '#c2410c' }}>
                      À revoir
                    </span>
                  </button>
                </div>
              </div>
            )}

            <Button
              onClick={onReset}
              variant="outline"
              className="w-full text-base h-10 border-slate-300 text-slate-600 hover:bg-slate-50"
            >
              Réinitialiser la session
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
