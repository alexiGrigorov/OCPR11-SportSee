/**
 * @file MainAside.jsx
 * @module MainAside
 * @description Composant Aside principal de l'application.
 * Ce composant affiche une barre latérale contenant des icônes représentant diverses activités sportives
 * et un texte de copyright.
 */

import IconMeditating from "../components/icons/IconMeditating";
import IconSwimming from "../components/icons/IconSwimming";
import IconCycling from "../components/icons/IconCycling";
import IconWeightlifting from "../components/icons/IconWeightlifting";

/**
 * Composant MainAside.
 *
 * Ce composant rend une barre latérale (aside) utilisée pour afficher des icônes d'activités sportives,
 * telles que la méditation, la natation, le cyclisme et la musculation, ainsi qu'un texte informatif en bas.
 * Les classes CSS utilisées sont issues de notre système de design interne.
 *
 * @component
 * @memberof module:MainAside
 * @returns {JSX.Element} Le rendu du composant MainAside.
 */
function MainAside() {
  return (
    <aside className="area-aside flex flex-col items-center justify-end bg-black px-4.5 pb-10 drop-shadow-lg">
      <div className="my-auto flex flex-col gap-5">
        <IconMeditating />
        <IconSwimming />
        <IconCycling />
        <IconWeightlifting />
      </div>
      <p className="vertical-text text-xs font-medium text-white">
        Copyright, SportSee 2020
      </p>
    </aside>
  );
}

export default MainAside;
