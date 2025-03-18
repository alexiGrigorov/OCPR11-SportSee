/**
 * @file CarbohydratesCounter.jsx
 * @module CarbohydratesCounter
 * @description Composant d'affichage du compteur de Glucides.
 * Ce composant affiche une icône représentant les glucides ainsi que la valeur des glucides formatée,
 * en utilisant le système de design interne.
 */

import IconCarbohydrates from "../icons/IconCarbohydrates";

/**
 * Composant CarbohydratesCounter.
 *
 * Ce composant rend une vue affichant une icône des glucides accompagnée d'un compteur de glucides.
 * Le composant accepte également des classes CSS supplémentaires et d'autres propriétés HTML via les props restants.
 *
 * @component
 * @memberof module:CarbohydratesCounter
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.value - La valeur numérique des glucides à afficher.
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du compteur.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du compteur de glucides.
 */
function CarbohydratesCounter({ value, className = "", ...props }) {
  return (
    <div
      className={`${className} flex items-center gap-6 rounded-sm bg-neutral-50 p-4`}
      {...props}
    >
      <IconCarbohydrates />
      <div>
        <p className="text-xl font-bold">{value.toString()}g</p>
        <p className="text-label text-sm font-medium">Glucides</p>
      </div>
    </div>
  );
}

export default CarbohydratesCounter;
