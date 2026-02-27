import { promises as fs } from "node:fs";
import path from "node:path";

export async function GET() {
  const pdfPath = path.join(process.cwd(), "Work Profile (1).pdf");

  try {
    const pdfBuffer = await fs.readFile(pdfPath);

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="work-profile.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Work profile not found.", { status: 404 });
  }
}
