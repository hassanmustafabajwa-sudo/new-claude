export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};
  const { name, email, company, project, budget, message, website } = body;

  // Quietly accept obvious bot submissions without sending anything.
  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !project || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return res.status(503).json({ error: "Contact service is not configured." });
  }

  const text = [
    "PARALLEL — NEW PROJECT INQUIRY",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Project: ${project}`,
    `Budget: ${budget || "—"}`,
    "",
    "Brief:",
    message
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `PARALLEL — Project Inquiry from ${name}`,
        text
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", detail);
      return res.status(502).json({ error: "Email provider rejected the request." });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ error: "Unable to send inquiry." });
  }
};
