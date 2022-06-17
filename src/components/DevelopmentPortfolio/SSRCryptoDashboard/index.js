import React from 'react'

const CryptoDashboard = () => (
  <section className="py-8">
    <div className="container mx-auto px-4">
      <div className="items-stre -mx-4 flex flex-wrap">
        <div className="mb-8 w-full px-4 lg:mb-0 lg:w-2/3">
          <div className="rounded bg-white">
            <div className="flex flex-wrap items-center px-6 pt-5 pb-12">
              <h3 className="mb-4 w-full text-xl font-bold md:mb-0 md:w-auto">
                Traffic Analysis
              </h3>
              <div className="ml-auto inline-flex text-xs text-gray-500">
                <span className="mr-2">
                  <svg
                    width="16"
                    height="16"
                    viewbox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M8 16C12.4183 16 16 12.4183 16 8H8V16Z"
                      fill="#F67A28"
                    ></path>
                    <path
                      d="M0 8C0 12.4183 3.58172 16 8 16V0C3.58172 0 0 3.58172 0 8Z"
                      fill="#F67A28"
                    ></path>
                  </svg>
                </span>
                <span>New visitors</span>
              </div>
              <div className="ml-6 inline-flex text-xs text-gray-500">
                <span className="mr-2">
                  <svg
                    width="16"
                    height="16"
                    viewbox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M8 16C12.4183 16 16 12.4183 16 8H8V16Z"
                      fill="#E85444"
                    ></path>
                    <path
                      d="M0 8C0 12.4183 3.58172 16 8 16V0C3.58172 0 0 3.58172 0 8Z"
                      fill="#E85444"
                    ></path>
                  </svg>
                </span>
                <span>Total visitors</span>
              </div>
            </div>
            <div
              className="chart px-2"
              data-type="columns-thin"
              data-variant="orange"
            ></div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/3">
          <div className="rounded bg-white px-6 pt-5 pb-16">
            <h3 className="mb-12 text-xl font-bold">Social Media Traffic</h3>
            <div className="chart px-2" data-type="radial-bar-part"></div>
            <div className="mx-auto -mt-16 mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-xl">
              &#x1F60A;
            </div>
            <div className="text-center">
              <h4 className="mb-2 text-4xl font-bold text-indigo-500">14%</h4>
              <div className="text-center">
                <span className="mr-2 text-sm font-medium text-gray-500">
                  Social Media Rate
                </span>
                <span className="rounded-full bg-green-50 py-1 px-2 text-xs text-green-500">
                  Good
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CryptoDashboard
