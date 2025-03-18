/**
 * @file httpResponses.mjs
 * @module httpResponses
 * @description Définit les fonctions utilitaires pour renvoyer des réponses HTTP d'erreur.
 */

/**
 * Lève une réponse HTTP indiquant que la page demandée n'a pas été trouvée.
 *
 * Cette fonction lance une instance de {@link Response} avec le message "Page Not Found", le status 404 et le statusText "Not Found".
 * Elle est utilisée notamment dans les loaders pour signaler qu'aucune ressource correspondante n'a été trouvée.
 *
 * @function throwNotFoundResponse
 * @memberof module:httpResponses
 * @throws {Response} Une instance de {@link Response} indiquant l'erreur 404.
 */
function throwNotFoundResponse() {
  throw new Response("Page Not Found", {
    status: 404,
    statusText: "Not Found",
  });
}

export { throwNotFoundResponse };
