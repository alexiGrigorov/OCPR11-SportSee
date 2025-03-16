import IconMeditating from "../components/icons/IconMeditating";
import IconSwimming from "../components/icons/IconSwimming";
import IconCycling from "../components/icons/IconCycling";
import IconWeightlifting from "../components/icons/IconWeightlifting";

function MainAside() {
  return (
    <aside className="area-aside flex flex-col items-center justify-end bg-black px-6.5 py-15 drop-shadow-lg">
      <div className="my-auto flex flex-col gap-5">
        <IconMeditating />
        <IconSwimming />
        <IconCycling />
        <IconWeightlifting />
      </div>
      <p className="vertical-text text-xs font-medium text-white">
        Copiryght, SportSee 2020
      </p>
    </aside>
  );
}

export default MainAside;
