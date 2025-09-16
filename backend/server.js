import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000; // puerto del backend

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor de Tarot backend funcionando 🚀");
});

// Aquí después conectaremos GPT4All u OpenAI
app.post("/interpretar", (req, res) => {
  const { pregunta, carta } = req.body;
  // Por ahora, simulamos una respuesta
  res.json({
    respuesta: `Simulación: la carta ${carta} responde a la pregunta "${pregunta}".`,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
