import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Shuffle } from "lucide-react";

interface WelcomeScreenProps {
  onStart: (blockNumber: string) => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [blockNumber, setBlockNumber] = useState("");
  const [error, setError] = useState("");

  const handleManualStart = () => {
    const block = blockNumber.trim();
    
    if (!block) {
      setError("Veuillez entrer un numéro de bloc");
      return;
    }

    const num = parseInt(block);
    if (isNaN(num) || num < 0 || num > 100) {
      setError("Le numéro doit être entre 0 et 100");
      return;
    }

    const formattedBlock = num === 100 ? "00" : num.toString().padStart(2, "0");
    onStart(formattedBlock);
  };

  const handleRandomStart = () => {
    const randomNum = Math.floor(Math.random() * 101);
    const formattedBlock = randomNum === 100 ? "00" : randomNum.toString().padStart(2, "0");
    onStart(formattedBlock);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Examen du permis de conduire</CardTitle>
          <CardDescription className="text-lg">
            Questions Orales
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="block-input" className="text-lg">Numéro du bloc (0-100)</Label>
            <div className="flex gap-2">
              <Input
                id="block-input"
                type="number"
                min="0"
                max="100"
                placeholder="Ex: 15"
                value={blockNumber}
                onChange={(e) => {
                  setBlockNumber(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleManualStart();
                  }
                }}
                className="text-lg h-12"
              />
              <Button onClick={handleManualStart} className="text-lg h-12 px-6">
                Démarrer
              </Button>
            </div>
            {error && (
              <p className="text-base text-red-500">{error}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-base uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Ou
              </span>
            </div>
          </div>

          <Button
            onClick={handleRandomStart}
            variant="outline"
            className="w-full text-lg h-12"
          >
            <Shuffle className="mr-2 h-5 w-5" />
            Bloc aléatoire
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
