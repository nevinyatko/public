import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, CheckCircle2, AlertCircle, Heart } from "lucide-react";
import type { Theme } from "../data/questions";

interface ThemeSelectionScreenProps {
  onSelectTheme: (theme: Theme) => void;
  onBack: () => void;
}

export function ThemeSelectionScreen({ onSelectTheme, onBack }: ThemeSelectionScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Button
            onClick={onBack}
            variant="ghost"
            className="absolute left-4 top-4 h-10 w-10 p-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <CardTitle style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Sélection de thème</CardTitle>
          <CardDescription className="text-lg">
            Choisissez le type de questions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => onSelectTheme("verification")}
            variant="outline"
            className="w-full text-lg h-20 flex flex-col items-center justify-center gap-2 border-2"
          >
            <CheckCircle2 className="h-8 w-8" />
            <div className="flex flex-col items-center">
              <span className="font-bold">Vérification</span>
              <span className="text-sm opacity-90">Questions de vérification</span>
            </div>
          </Button>

          <Button
            onClick={() => onSelectTheme("qser")}
            variant="outline"
            className="w-full text-lg h-20 flex flex-col items-center justify-center gap-2 border-2"
          >
            <AlertCircle className="h-8 w-8" />
            <div className="flex flex-col items-center">
              <span className="font-bold">QSER</span>
              <span className="text-sm opacity-90">Questions de sécurité routière</span>
            </div>
          </Button>

          <Button
            onClick={() => onSelectTheme("secours")}
            variant="outline"
            className="w-full text-lg h-20 flex flex-col items-center justify-center gap-2 border-2"
          >
            <Heart className="h-8 w-8" />
            <div className="flex flex-col items-center">
              <span className="font-bold">1ers Secours</span>
              <span className="text-sm opacity-90">Questions de premiers secours</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
