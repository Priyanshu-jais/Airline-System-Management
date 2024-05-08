const Loader = () => {
  return (
    <div class="flex space-x-2 justify-center items-center  dark:invert">
      {/* <span class='sr-only w-5 h-5'>Loading...</span> */}
      <span className="text-white font-bold">Loading </span>
      <div class="h-2 w-2 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-2 w-2 bg-green-500 rounded-full animate-bounce"></div>
    </div>
  );
};
export default Loader;
