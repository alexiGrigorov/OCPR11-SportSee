/**
 * @file httpResponses.mjs
 * @module httpResponses
 * @description Définit les fonctions utilitaires pour renvoyer des réponses HTTP d'erreur.
 */

/**
 * Lève une réponse HTTP de type 404.
 *
 * Cette fonction lance une instance de {@link Response} indiquant que la page demandée n'a pas été trouvée.
 * Elle est utilisée notamment dans les loaders pour signaler une erreur "Not Found".
 *
 * @function throwNotFoundResponse
 * @memberof module:httpResponses
 * @throws {Response} Une réponse HTTP avec le message "Page Not Found", le status 404 et le statusText "Not Found".
 */
function throwNotFoundResponse() {
  throw new Response("Page Not Found", {
    status: 404,
    statusText: "Not Found",
  });
}

export { throwNotFoundResponse };
