/**
 * @file SvgIcon.jsx
 * @module SvgIcon
 * @description Composant utilitaire pour afficher une icône SVG.
 * Ce composant enveloppe un élément SVG passé en prop et applique la propriété "fill" à "currentColor",
 * permettant à l'icône d'hériter de la couleur du texte environnant.
 */

import { cloneElement } from "react";

/**
 * Composant SvgIcon.
 *
 * Ce composant prend un élément SVG en prop et utilise React.cloneElement pour définir la propriété "fill" sur "currentColor".
 * Un attribut "className" optionnel permet d'appliquer des styles personnalisés au conteneur de l'icône.
 *
 * @component
 * @memberof module:SvgIcon
 * @param {Object} props - Les propriétés du composant.
 * @param {JSX.Element} props.svg - L'élément SVG à afficher.
 * @param {string} [props.className=""] - Les classes CSS à appliquer au conteneur de l'icône.
 * @returns {JSX.Element} Le rendu du composant SvgIcon.
 */
const SvgIcon = ({ svg, className = "" }) => {
  return (
    <div className={className}>
      {cloneElement(svg, { fill: "currentColor" })}
    </div>
  );
};

export default SvgIcon;
