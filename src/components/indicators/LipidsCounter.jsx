import IconLipids from "../icons/IconLipids";

function CaloriesCounter({ value }) {
  return (
    <div className="flex items-center gap-6 rounded-sm bg-neutral-50 p-8">
      <IconLipids />
      <div>
        <p className="text-xl font-bold">{value.toString()}g</p>
        <p className="text-label text-sm font-medium">Lipides</p>
      </div>
    </div>
  );
}

export default CaloriesCounter;
