import plusIcon from "../../assets/images/icon-plus.svg";
import minuscon from "../../assets/images/icon-minus.svg";

function Counter() {
  return (
    <button className="flex cursor-pointer items-center gap-7 rounded-lg bg-stone-100 px-6 py-1.5">
      <span>
        <img src={plusIcon} alt="plusIcon" />
      </span>
      <span className="font-bold">0</span>
      <span>
        <img src={minuscon} alt="minusIcon" />
      </span>
    </button>
  );
}

export default Counter;
