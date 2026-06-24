import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY!;
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

const NOTIFY_EMAIL = "thomas.jarrell@jarrellsqualityhvac.com";

async function supabasePost(table: string, body: Record<string, unknown>) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Supabase ${table}: ${res.status}`);
  const data = await res.json();
  return data[0];
}

async function sendEmailNotification(
  name: string,
  phone: string,
  address: string,
  description: string | undefined,
) {
  await getResend().emails.send({
    from: "Jarrell's Quality HVAC <onboarding@resend.dev>",
    to: NOTIFY_EMAIL,
    subject: `New Estimate Request — ${name}`,
    html: `
      <h2 style="margin:0 0 16px">New Estimate Request</h2>
      <table style="border-collapse:collapse;font-size:15px">
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Name</td><td>${name}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Phone</td><td><a href="tel:${phone}">${phone}</a></td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Address</td><td>${address}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:bold">Description</td><td>${description || "—"}</td></tr>
      </table>
      <p style="margin-top:20px;color:#666;font-size:13px">Submitted from jarrellsqualityhvac.com</p>
    `,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, address, description } = await req.json();

    if (!name || !phone || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [firstName, ...rest] = name.trim().split(/\s+/);
    const lastName = rest.join(" ") || "—";

    const customer = await supabasePost("customers", {
      first_name: firstName,
      last_name: lastName,
      phone,
      street: address,
      customer_type: "Residential",
      notes: description
        ? `Website estimate request: ${description}`
        : "Website estimate request",
    });

    await supabasePost("jobs", {
      customer_id: customer.id,
      job_type: "Estimate",
      status: "Scheduled",
      problem_reported: description || "Estimate requested via website",
      notes: `Address: ${address}`,
    });

    // Send email notification (don't let failure block the response)
    sendEmailNotification(name, phone, address, description).catch((err) =>
      console.error("Email notification failed:", err),
    );

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Estimate submission error:", e);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
