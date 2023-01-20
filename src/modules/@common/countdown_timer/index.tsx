import { useCountdown } from "../../../hooks/useCounddown";
// const targetDate = "09/26/2022";

interface propsTypes {
  targetDate?: string | number | Date;
  customClasses?: any;
}

export const CountdownTimer = ({ targetDate, customClasses }: propsTypes) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate ?? "");

  return (
    <ul
      className={`flex items-center gap-1 text-primary font-semibold rounded-sm bg-white ${
        customClasses?.root ? customClasses?.root : ""
      }`}
    >
      <li>
        <div
          className={` ${
            customClasses?.counter_number ? customClasses?.counter_number : ""
          }`}
        >
          {days}
        </div>
      </li>
      :
      <li>
        <div
          className={`${
            customClasses?.counter_number ? customClasses?.counter_number : ""
          }`}
        >
          {hours}
        </div>
      </li>
      :
      <li>
        <div
          className={`${
            customClasses?.counter_number ? customClasses?.counter_number : ""
          }`}
        >
          {minutes}
        </div>
      </li>
      :
      <li>
        <div
          className={`w-[20px] ${
            customClasses?.counter_number ? customClasses?.counter_number : ""
          }`}
        >
          {seconds}
        </div>
      </li>
    </ul>
  );
};

export default CountdownTimer;
