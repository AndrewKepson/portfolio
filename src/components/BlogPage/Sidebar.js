import React from 'react'
import { Link } from 'gatsby'
import { useWordPressCategories } from '../../hooks/useWordPressCategories'

const Sidebar = ({
  posts,
  searchedName,
  filterBySearch,
  filterByCategory,
  onClear,
}) => {
  const {
    allWpCategory: { edges: categories },
  } = useWordPressCategories()

  return (
    <aside className="hidden p-4 w-full lg:block lg:order-1 lg:w-5/12 xl:w-4/12">
      <div className="bg-gray-200 bg-opacity-70 p-6 rounded-sm shadow-lg sticky top-20">
        <form>
          <div className="mb-4 relative">
            <input
              className="appearance-none border border-gray-300 pl-4 pr-10 py-4 rounded w-full"
              placeholder="Looking for?"
              type="text"
              required=""
              onChange={filterBySearch}
            />
            <span className="absolute inline-flex inset-y-0 items-center right-4 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="mb-4 relative">
            <select
              required=""
              className="appearance-none border border-gray-300 pl-4 pr-10 py-4 rounded w-full"
              onChange={filterByCategory}
            >
              <option value="all" selected>
                All Categories
              </option>
              {categories.map(category => (
                <option key={category.node.id} value={category.node.name}>
                  {category.node.name}
                </option>
              ))}
            </select>
            <span className="absolute inline-flex inset-y-0 items-center right-4 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
            </span>
          </div>

          <div className="text-right">
            <button
              className="bg-purple-600 hover:bg-purple-400 inline-block px-6 py-2 rounded-full shadow-lg text-center text-white"
              type="submit"
              onClick={onClear}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </aside>
  )
}

export default Sidebar
