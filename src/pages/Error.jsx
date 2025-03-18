/**
 * @file Error.jsx
 * @module Error
 * @description Composant de la page d'erreur de l'application.
 * Ce composant affiche une vue simplifiée indiquant une erreur 404 lorsque la page demandée n'est pas trouvée.
 */

import React from "react";

/**
 * Composant Error.
 *
 * Ce composant rend une vue simple avec le code d'erreur 404 pour signaler qu'aucune page correspondante n'a été trouvée.
 * Il est utilisé dans la configuration du routeur comme élément d'erreur.
 *
 * @component
 * @memberof module:Error
 * @returns {JSX.Element} Le rendu du composant Error affichant le code 404.
 */
function Error() {
  return (
    <main className="area-main px-15 py-10">
      <h1 className="text-primary mb-8 text-5xl font-medium">404</h1>
    </main>
  );
}

export default Error;
