import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY!;

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

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Estimate submission error:", e);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
