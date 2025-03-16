import IconProteins from "../icons/IconProteins";

function CaloriesCounter({ value }) {
  return (
    <div className="flex items-center gap-6 rounded-sm bg-neutral-50 p-8">
      <IconProteins />
      <div>
        <p className="text-xl font-bold">{value.toString()}g</p>
        <p className="text-label text-sm font-medium">Proteines</p>
      </div>
    </div>
  );
}

export default CaloriesCounter;
