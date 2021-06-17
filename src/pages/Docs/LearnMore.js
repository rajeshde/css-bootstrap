const LearnMore = () => (
  <div className="flex justify-center items-center bg-gradient-to-r from-indigo-600 to-blue-500 px-6 sm:px-4 py-2">
    <div className="text-white font-medium text-sm">
      Just-in-Time: The Next Generation of Tailwind CSS
    </div>
    <span
      aria-hidden={true}
      className="hidden sm:block h-6 w-px mx-6 bg-white bg-opacity-20"
    ></span>
    <button className="bg-white py-2 px-3 whitespace-nowrap border-transparent rounded-md text-xs font-semibold text-blue-500 uppercase inline-block ml-6 sm:ml-0 hover:bg-opacity-90">
      learn more &#x02192;
    </button>
  </div>
);

export default LearnMore;
