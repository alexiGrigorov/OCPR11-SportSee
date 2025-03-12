/**
 * @file index.jsx
 * @description Point d'entrée de l'application React.
 * Ce fichier initialise l'application en affichant le composant principal App
 * dans l'élément racine du DOM.
 */

import { createRoot } from "react-dom/client";
import App from "./App";

// Récupère l'élément racine du DOM.
/** @type {HTMLElement} */
const rootElement = document.getElementById("root");

// Crée une racine React pour l'application.
/** @type {import("react-dom/client").Root} */
const root = createRoot(rootElement);

// Affiche le composant principal App dans la racine React.
root.render(<App />);
