import { serveTls } from "https://deno.land/std@0.184.0/http/server.ts";

const certFile = "./localhost.pem";
const keyFile = "./localhost-key.pem";

function handler(_req: Request): Response {
  return new Response("Hello, World!",{
    status: 200,
    headers: {
      "access-control-allow-origin": "*",
      "content-type": "application/json; charset=utf-8",
    },
  }
  );
}

serveTls(handler, {
  certFile,
  keyFile,
  port: 8080,
  onListen({ port, hostname }) {
    console.log(`Server started at https://${hostname}:${port}`);
  },
});
