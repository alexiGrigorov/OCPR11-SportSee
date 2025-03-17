import IconCalories from "../icons/IconCalories";

function CaloriesCounter({ value, className, ...props }) {
  return (
    <div
      className={`${className} flex items-center gap-6 rounded-sm bg-neutral-50 p-8`}
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
