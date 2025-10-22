import { useState } from "react";
import { preguntarGPT } from "../services/gpt4all";

export default function ChatMistral() {
  const [input, setInput] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setRespuesta("");
    try {
      const r = await preguntarGPT(input);
      setRespuesta(r);
    } catch (err) {
      setRespuesta("⚠️ Error al conectar con GPT4All");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">Chat con Mistral (GPT4All)</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
        <button className="btn btn-primary" onClick={handleAsk} disabled={loading}>
          {loading ? "Preguntando..." : "Preguntar"}
        </button>
      </div>

      {respuesta && (
        <div className="alert alert-secondary">
          <strong>Respuesta:</strong> {respuesta}
        </div>
      )}
    </div>
  );
}
