import { serve } from "https://deno.land/std@0.135.0/http/server.ts";

async function handler(request: Request) {
  const { method } = request;
  const common = `This is a ${method} method.`;
  switch (method) {
    case "POST":
      return await handlePost(request);
    default:
      return new Response(common);
  }
}

async function handlePost(request: Request) {
  const contentType = request.headers.get("Content-Type");
  let body;
  if (contentType?.includes("multipart/form-data")) {
    const formData = await request.formData();
    body = Object.fromEntries(formData);
  } else if (contentType?.includes("application/json")) {
    body = await request.json();
  } else {
    throw new Error("Content-Type not supported");
  }
  return new Response(JSON.stringify(body), { status: 200 });
}

serve(handler, { port: 5555 });
