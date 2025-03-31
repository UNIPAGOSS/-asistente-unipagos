
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AsistenteUNIPAGOS() {
  const [step, setStep] = useState(0);
  const [datos, setDatos] = useState({});

  const preguntas = [
    {
      campo: "nombre",
      texto: "¿Cuál es tu nombre completo?",
    },
    {
      campo: "documento",
      texto: "¿Cuál es tu número de cédula o documento?",
    },
    {
      campo: "actividad",
      texto: "¿Sos comerciante/emprendedor o trabajás con recibo de sueldo?",
    },
    {
      campo: "ingresos",
      texto: "¿Cuál es tu ingreso mensual aproximado?",
    },
    {
      campo: "monto",
      texto: "¿Qué monto te gustaría solicitar como préstamo?",
    },
    {
      campo: "destino",
      texto: "¿Para qué usarías el préstamo? (opcional)",
    },
  ];

  const handleChange = (e) => {
    setDatos({ ...datos, [preguntas[step].campo]: e.target.value });
  };

  const handleNext = () => {
    if (step < preguntas.length - 1) {
      setStep(step + 1);
    } else {
      console.log("Respuestas finales:", datos);
      setStep(step + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          {step < preguntas.length ? (
            <>
              <p className="text-lg font-semibold mb-4">
                {preguntas[step].texto}
              </p>
              <Input
                value={datos[preguntas[step].campo] || ""}
                onChange={handleChange}
                placeholder="Escribí tu respuesta acá..."
              />
              <Button className="mt-4 w-full" onClick={handleNext}>
                Siguiente
              </Button>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold text-center mb-4">
                ¡Gracias! Hemos recibido tu información. Un asesor de UNIPAGOS se 
                pondrá en contacto contigo a la brevedad.
              </p>
              <pre className="bg-gray-100 p-2 rounded text-sm">
                {JSON.stringify(datos, null, 2)}
              </pre>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
