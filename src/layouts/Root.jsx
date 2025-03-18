/**
 * @file Root.jsx
 * @module Root
 * @description Composant racine de l'application.
 * Ce composant définit la structure globale de l'application en intégrant le layout principal.
 * Il englobe l'en-tête de navigation (MainHeader), le contenu dynamique géré par le routeur (Outlet)
 * et la barre latérale (MainAside).
 */

import { Outlet } from "react-router-dom";
import MainHeader from "../ui/MainHeader";
import MainAside from "../ui/MainAside";

/**
 * Composant Root.
 *
 * Ce composant sert de layout principal pour l'application.
 * Il inclut :
 * - Le MainHeader pour la navigation en haut de la page.
 * - Un Outlet qui rend dynamiquement le contenu en fonction des routes configurées.
 * - Le MainAside pour afficher des informations ou des icônes complémentaires en barre latérale.
 *
 * @component
 * @memberof module:Root
 * @returns {JSX.Element} Le rendu du layout racine de l'application.
 */
function Root() {
  return (
    <div className="layout-root grid min-h-screen">
      <MainHeader />
      <Outlet />
      <MainAside />
    </div>
  );
}

export default Root;
