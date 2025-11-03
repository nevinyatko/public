import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, Hash } from "lucide-react";

interface ModeSelectionScreenProps {
  onSelectMode: (mode: "theme" | "block") => void;
}

export function ModeSelectionScreen({ onSelectMode }: ModeSelectionScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Examen du permis de conduire</CardTitle>
          <CardDescription className="text-lg">
            Questions Orales
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-base text-muted-foreground mb-6">
            Choisissez votre mode d'entraînement
          </p>

          <Button
            onClick={() => onSelectMode("theme")}
            variant="outline"
            className="w-full text-lg h-16 flex items-center justify-center gap-3 border-2"
          >
            <BookOpen className="h-6 w-6" />
            <span>Questions par thème</span>
          </Button>

          <Button
            onClick={() => onSelectMode("block")}
            variant="outline"
            className="w-full text-lg h-16 flex items-center justify-center gap-3 border-2"
          >
            <Hash className="h-6 w-6" />
            <span>Questions par bloc</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
