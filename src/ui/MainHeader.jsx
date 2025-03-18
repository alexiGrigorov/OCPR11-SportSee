/**
 * @file MainHeader.jsx
 * @module MainHeader
 * @description Composant d'en-tête principal de l'application.
 * Ce composant affiche la barre de navigation principale incluant le logo du site et les liens de navigation.
 * Certains liens (Profil, Réglage, Communauté) désactivent la navigation via leur gestionnaire d'événement.
 */

import { Link } from "react-router-dom";
import SiteLogo from "../components/SiteLogo";

/**
 * Composant MainHeader.
 *
 * Ce composant rend l'en-tête principal de l'application. Il présente un menu de navigation
 * qui permet d'accéder à la page d'accueil via le logo interactif, ainsi que des liens vers
 * d'autres sections de l'application. Les liens inactifs (Profil, Réglage, Communauté) utilisent
 * un gestionnaire d'événement pour empêcher la navigation, indiquant qu'ils ne sont pas encore implémentés.
 *
 * @component
 * @memberof module:MainHeader
 * @returns {JSX.Element} Le rendu de l'en-tête principal avec le menu de navigation.
 */
function MainHeader() {
  return (
    <header className="area-header full-width bg-black py-2 ps-5 pe-10 text-white drop-shadow-lg">
      <nav>
        <menu className="flex flex-row items-center justify-between text-xl font-medium">
          <li>
            <Link to="/">
              <SiteLogo />
            </Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/profile" onClick={(e) => e.preventDefault()}>
              Profil
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={(e) => e.preventDefault()}>
              Réglage
            </Link>
          </li>
          <li>
            <Link to="/community" onClick={(e) => e.preventDefault()}>
              Communauté
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
}

export default MainHeader;
