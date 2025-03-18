import IconCarbohydrates from "../icons/IconCarbohydrates";

function CaloriesCounter({ value, className = "", ...props }) {
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

export default CaloriesCounter;
