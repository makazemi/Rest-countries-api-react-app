import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Filter({onFilterClick}) {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left text-veryDarkBlue dark:text-white max-w-fit"
    >
      <div>
        <Menu.Button className="inline-flex dark:bg-darkBlue justify-center gap-x-1.5 rounded-md bg-white px-5 py-2 text-sm   shadow-sm text-veryDarkBlue dark:text-white ring-1 ring-black ring-opacity-5  hover:bg-gray-50">
          Filter by Region
          <ChevronDownIcon
            className="-mr-1 ml-6 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 left-0 dark:bg-darkBlue rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                className=" block px-5 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={()=>onFilterClick("Africa")}
              >
                Africa
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className=" block px-5 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={()=>onFilterClick("America")}
              >
                America
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className=" block px-5 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={()=>onFilterClick("Asia")}
              >
                Asia
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className=" block px-5 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={()=>onFilterClick("Europe")}
              >
                Europe
              </a>
            </Menu.Item>

            <Menu.Item>
              <a
                href="#"
                className=" block px-5 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={()=>onFilterClick("Oceania")}
              >
                Oceania
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Filter;
