export function throwNotFoundResponse() {
  throw new Response("Page Not Found", {
    status: 404,
    statusText: "Not Found",
  });
}
