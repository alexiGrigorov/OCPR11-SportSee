import { Link } from "react-router-dom";

import SiteLogo from "../components/SiteLogo";

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
