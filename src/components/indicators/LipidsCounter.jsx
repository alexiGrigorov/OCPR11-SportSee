/**
 * @file LipidsCounter.jsx
 * @module LipidsCounter
 * @description Composant d'affichage du compteur de Lipides.
 * Ce composant affiche une icône représentant les lipides ainsi que la valeur des lipides formatée,
 * en utilisant le système de design interne.
 */

import IconLipids from "../icons/IconLipids";

/**
 * Composant LipidsCounter.
 *
 * Ce composant rend une vue affichant une icône des lipides accompagnée d'un compteur de lipides.
 * Le composant accepte également des classes CSS supplémentaires et d'autres propriétés HTML via les props restants.
 *
 * @component
 * @memberof module:LipidsCounter
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.value - La valeur numérique des lipides à afficher.
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du compteur.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du compteur de lipides.
 */
function LipidsCounter({ value, className = "", ...props }) {
  return (
    <div
      className={`${className} flex items-center gap-6 rounded-sm bg-neutral-50 p-4`}
      {...props}
    >
      <IconLipids />
      <div>
        <p className="text-xl font-bold">{value.toString()}g</p>
        <p className="text-label text-sm font-medium">Lipides</p>
      </div>
    </div>
  );
}

export default LipidsCounter;
