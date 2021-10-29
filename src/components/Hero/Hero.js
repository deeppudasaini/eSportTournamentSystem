export default function Updates() {
  return (
    <div>
      <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              Experience the Next Gaming Platform
            </h1>
            <p className="pr-0 mb-8 text-base sm:text-lg xl:text-xl lg:pr-20">
              Watch and participate in the competative tournaments and win
              different prizes
            </p>

            <svg
              className="absolute left-0 max-w-md mt-24 -ml-64 left-svg"
              viewBox="0 0 423 423"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth={1}
                fill="none"
                fillRule="evenodd"
                opacity=".9"
              >
                <g id="Desktop-HD" transform="translate(-39 -531)">
                  <g id="Hero" transform="translate(43 83)">
                    <g id="Rectangle-6" transform="rotate(45 213 654)">
                      <use
                        fill="#000"
                        filter="url(#filter-3)"
                        xlinkHref="#path-2"
                      />
                      <use fill="url(#linearGradient-1)" xlinkHref="#path-2" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
              <img
                src="https://i.stack.imgur.com/zZNgk.png"
                className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
