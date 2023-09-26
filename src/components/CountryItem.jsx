import {Link} from "react-router-dom";

function CountryItem({item}) {
  return (
    <Link to={`countries/1`}>
      <button
        className="bg-white dark:bg-darkBlue text-veryDarkBlue dark:text-white pb-12
        rounded-lg shadow-md ring-1 ring-black ring-opacity-5 w-60"
      >
        <img
          src={item.flags.svg}
          className="w-full h-40 rounded-t-lg object-cover"
        />
        <div className="px-6 flex flex-col">
          <h1 className="font-bold text-lg  mt-6 mb-4 text-left">{item.name.common}</h1>

          <div className="inline-flex items-center space-x-2">
            <p className="font-semibold text-md">Population:</p>
            <p className="font-thin text-sm">{item.population}</p>
          </div>

          <div className="inline-flex items-center space-x-2">
            <p className="font-semibold text-md">Region:</p>
            <p className="font-thin text-sm">{item.region}</p>
          </div>

          <div className="inline-flex items-center space-x-2">
            <p className="font-semibold text-md">Capital:</p>
            <p className="font-thin text-sm">{item && item.capital && item.capital[0]}</p>
          </div>
        </div>
      </button>
    </Link>
  );
}
export default CountryItem;
