import IconLipids from "../icons/IconLipids";

function CaloriesCounter({ value, className = "", ...props }) {
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

export default CaloriesCounter;
