/**
 * @file ProteinsCounter.jsx
 * @module ProteinsCounter
 * @description Composant d'affichage du compteur de Proteines.
 * Ce composant affiche une icône représentant les proteines ainsi que la valeur des proteines formatée,
 * en utilisant le système de design interne.
 */

import IconProteins from "../icons/IconProteins";

/**
 * Composant ProteinsCounter.
 *
 * Ce composant rend une vue affichant une icône des proteines accompagnée d'un compteur de proteines.
 * Le composant accepte également des classes CSS supplémentaires et d'autres propriétés HTML via les props restants.
 *
 * @component
 * @memberof module:ProteinsCounter
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.value - La valeur numérique des proteines à afficher.
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du compteur.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du compteur de proteines.
 */
function ProteinsCounter({ value, className = "", ...props }) {
  return (
    <div
      className={`${className} flex items-center gap-6 rounded-sm bg-neutral-50 p-4`}
      {...props}
    >
      <IconProteins />
      <div>
        <p className="text-xl font-bold">{value.toString()}g</p>
        <p className="text-label text-sm font-medium">Proteines</p>
      </div>
    </div>
  );
}

export default ProteinsCounter;
