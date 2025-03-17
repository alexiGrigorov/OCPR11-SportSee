import IconProteins from "../icons/IconProteins";

function CaloriesCounter({ value, className, ...props }) {
  return (
    <div
      className={`${className} flex items-center gap-6 rounded-sm bg-neutral-50 p-8`}
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

export default CaloriesCounter;
