/**
 * @file index.jsx
 * @module index
 * @description Point d'entrée de l'application React.
 * Ce fichier initialise l'application en affichant le composant principal App
 * dans l'élément racine du DOM.
 */

import { createRoot } from "react-dom/client";
import App from "./App";
import "./app.css"; // Importation des styles globaux de l'application

/**
 * Récupère l'élément racine du DOM.
 * @memberof module:index
 * @constant
 * @type {(HTMLElement|null)}
 * @throws {Error} Si l'élément racine n'est pas trouvé.
 */
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Element with id "root" not found.');
}

/**
 * Crée une racine React pour l'application.
 * @memberof module:index
 * @constant
 * @type {ReactDOM.Root}
 */
const root = createRoot(rootElement);

/**
 * Affiche le composant principal App dans la racine React.
 * Utilise le mode de rendu concurrent introduit avec React 18.
 */
root.render(<App />);
