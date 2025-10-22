// src/services/gpt4all.js
export async function preguntarGPT(prompt) {
  const response = await fetch("http://localhost:4891/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral", // usa el nombre que aparece en /v1/models
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    }),
  });

  if (!response.ok) {
    throw new Error("Error al conectar con GPT4All");
  }

  const data = await response.json();

  // Adaptación: algunos builds devuelven `message.content`, otros `text`
  return (
    data?.choices?.[0]?.message?.content ||
    data?.choices?.[0]?.text ||
    "Sin respuesta"
  );
}
