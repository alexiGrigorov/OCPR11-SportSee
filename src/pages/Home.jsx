/**
 * @file Home.jsx
 * @module Home
 * @description Composant de la page d'accueil de l'application.
 * Ce composant affiche un message d'accueil et fournit des liens vers des pages de profil utilisateur d'exemple,
 * permettant de démontrer l'utilisation des données dynamiques.
 */

import { Link } from "react-router-dom";

/**
 * Composant Home.
 *
 * Ce composant présente la page d'accueil avec un titre et une description contenant des liens vers
 * des profils utilisateur spécifiques pour l'exemple. Les classes CSS utilisées (par exemple, "area-main", "py-10")
 * font partie de notre système de design interne.
 *
 * @component
 * @memberof module:Home
 * @returns {JSX.Element} Le rendu du composant Home.
 */
function Home() {
  return (
    <main className="area-main py-10 ps-15">
      <h1 className="mb-8 text-5xl font-medium">Accueil</h1>
      <p className="text-lg">
        Pour un exemple avec des données dynamiques, consultez les sites pages{" "}
        <Link className="text-primary" to={"/user/12"}>
          user/12
        </Link>{" "}
        ou{" "}
        <Link className="text-primary" to={"/user/18"}>
          user/18
        </Link>
      </p>
    </main>
  );
}

export default Home;
