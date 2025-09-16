export async function interpretarConBackend(pregunta, carta) {
  const response = await fetch("http://localhost:5000/interpretar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pregunta, carta }),
  });

  if (!response.ok) {
    throw new Error("Error al conectar con el backend");
  }

  const data = await response.json();
  return data.respuesta;
}
