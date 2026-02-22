import { corsHeaders } from "../_shared/cors.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, apellidos, telefono, poblacion, tipoServicio, mensaje } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const htmlContent = `
      <h2>Nueva solicitud de presupuesto</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Nombre</td><td style="padding:8px;border:1px solid #ddd">${nombre} ${apellidos}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Teléfono</td><td style="padding:8px;border:1px solid #ddd">${telefono}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Población</td><td style="padding:8px;border:1px solid #ddd">${poblacion}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Servicio</td><td style="padding:8px;border:1px solid #ddd">${tipoServicio || "No especificado"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #ddd">Mensaje</td><td style="padding:8px;border:1px solid #ddd">${mensaje || "Sin mensaje"}</td></tr>
      </table>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Max Efficiency <onboarding@resend.dev>",
        to: ["info@max-efficiency.es"],
        subject: `Nueva solicitud: ${nombre} ${apellidos} - ${tipoServicio || "General"}`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      throw new Error(data.message || "Error sending email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
