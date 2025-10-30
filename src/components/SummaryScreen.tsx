import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { RotateCcw, CheckCircle } from "lucide-react";
import type { Question } from "../data/questions";

interface SummaryScreenProps {
  question: Question;
  onNewTest: () => void;
}

export function SummaryScreen({ question, onNewTest }: SummaryScreenProps) {
  const questions = [
    { q: question.question1, a: question.answer1, label: "Vérification" },
    { q: question.question2, a: question.answer2, label: "QSER" },
    { q: question.question3, a: question.answer3, label: "1ers Secours" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">
              Bloc {question.block}
            </Badge>
            <Badge variant={question.type === "VI" ? "default" : "outline"}>
              {question.type === "VI" ? "Vérification Intérieure" : "Vérification Extérieure"}
            </Badge>
          </div>
          <CardTitle className="text-center">Test terminé !</CardTitle>
          <CardDescription className="text-center">
            Voici le récapitulatif de vos questions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {questions.map((item, index) => (
            <div key={index}>
              {index > 0 && <Separator className="mb-6" />}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Q{index + 1}</Badge>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm">{item.q}</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm">{item.a}</p>
                </div>
              </div>
            </div>
          ))}

          <Button onClick={onNewTest} className="w-full mt-6">
            <RotateCcw className="mr-2 h-4 w-4" />
            Nouveau test
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
