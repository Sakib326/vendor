import { useCountdown } from "../../../hooks/useCounddown";
// const targetDate = "09/26/2022";

interface propsTypes {
  targetDate?: string | number | Date;
  customClasses?: any;
}

export const CountdownTimer = ({ targetDate, customClasses }: propsTypes) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate ?? "");

  const completed =
    parseInt(days) + parseInt(hours) + parseInt(minutes) + parseInt(seconds) <=
    0;

  return (
    <ul
      className={`min-w-[215px] flex items-center gap-1 text-primary font-semibold rounded-sm bg-white ${
        customClasses?.root ? customClasses?.root : ""
      }`}
    >
      {completed ? (
        <li className="w-full">
          <div
            className={` text-center ${
              customClasses?.counter_number ? customClasses?.counter_number : ""
            }`}
          >
            00:00:00:00
          </div>
        </li>
      ) : (
        <>
          <li
            className={`w-max ${
              customClasses?.counter_number ? customClasses?.counter_number : ""
            }`}
          >
            Ends in:{" "}
          </li>
          <li>
            <div
              className={` ${
                customClasses?.counter_number
                  ? customClasses?.counter_number
                  : ""
              }`}
            >
              {days}
            </div>
          </li>
          :
          <li>
            <div
              className={`${
                customClasses?.counter_number
                  ? customClasses?.counter_number
                  : ""
              }`}
            >
              {hours}
            </div>
          </li>
          :
          <li>
            <div
              className={`${
                customClasses?.counter_number
                  ? customClasses?.counter_number
                  : ""
              }`}
            >
              {minutes}
            </div>
          </li>
          :
          <li>
            <div
              className={`w-[20px] ${
                customClasses?.counter_number
                  ? customClasses?.counter_number
                  : ""
              }`}
            >
              {seconds}
            </div>
          </li>
        </>
      )}
    </ul>
  );
};

export default CountdownTimer;
