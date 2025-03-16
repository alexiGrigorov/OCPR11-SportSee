/**
 * @file index.jsx
 * @module index
 * @description Point d'entrée de l'application React.
 * Ce fichier initialise l'application en affichant le composant principal App
 * dans l'élément racine du DOM.
 */

import { createRoot } from "react-dom/client";
import App from "./App";
import "./app.css";

/**
 *Récupère l'élément racine du DOM.
 * @memberof module:index
 * @constant
 * @type {HTMLElement}
 *
 */
const rootElement = document.getElementById("root");

/**
 *Crée une racine React pour l'application.
 * @memberof module:index
 * @constant
 * @type {Root}
 */
const root = createRoot(rootElement);

// Affiche le composant principal App dans la racine React.
root.render(<App />);
