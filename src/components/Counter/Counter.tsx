function Counter() {
  return (
    <button className="flex cursor-pointer items-center gap-7 rounded-lg bg-stone-100 px-1.5 py-1.5">
      <span className="text-xl font-bold text-orange-500">-</span>
      <span className="font-bold">0</span>
      <span className="text-xl font-bold text-orange-500">+</span>
    </button>
  );
}

export default Counter;
