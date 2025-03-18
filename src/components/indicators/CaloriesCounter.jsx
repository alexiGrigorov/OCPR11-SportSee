/**
 * @file CaloriesCounter.jsx
 * @module CaloriesCounter
 * @description Composant d'affichage du compteur de calories.
 * Ce composant affiche une icône représentant les calories ainsi que la valeur des calories formatée,
 * en utilisant le système de design interne. Il s'assure également que les valeurs supérieures à 1000
 * sont correctement formatées à l'aide d'Intl.NumberFormat.
 */

import IconCalories from "../icons/IconCalories";

/**
 * Composant CaloriesCounter.
 *
 * Ce composant rend une vue affichant une icône des calories accompagnée d'un compteur de calories.
 * Si la valeur fournie dépasse 1000, celle-ci est formatée avec Intl.NumberFormat pour une meilleure lisibilité.
 * Le composant accepte également des classes CSS supplémentaires et d'autres propriétés HTML via les props restants.
 *
 * @component
 * @memberof module:CaloriesCounter
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.value - La valeur numérique des calories à afficher.
 * @param {string} [props.className=""] - Classes CSS supplémentaires à appliquer au conteneur du compteur.
 * @param {Object} [props.rest] - Autres propriétés HTML à appliquer au conteneur.
 * @returns {JSX.Element} Le rendu du compteur de calories.
 */
function CaloriesCounter({ value, className = "", ...props }) {
  return (
    <div
      className={`${className} flex flex-shrink-0 items-center gap-6 rounded-sm bg-neutral-50 p-4`}
      {...props}
    >
      <IconCalories />
      <div>
        <p className="text-xl font-bold">
          {value > 1000
            ? new Intl.NumberFormat("en-US").format(value)
            : value.toString()}
          kCal
        </p>
        <p className="text-label text-sm font-medium">Calories</p>
      </div>
    </div>
  );
}

export default CaloriesCounter;
