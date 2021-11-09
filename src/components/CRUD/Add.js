export default function Add(props) {
  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto ease-out duration-400">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          ​
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <form>
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mb-4">
                    <label
                      for="exampleFormControlInput1"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Title:
                    </label>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="exampleFormControlInput1"
                      placeholder="Enter Title"
                    />
                    {/* @error('title') <span className="text-red-500">{{ $message }}</span>@enderror */}
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlInput2"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Body:
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="exampleFormControlInput2"
                      placeholder="Enter Body"
                    ></textarea>
                    {/* @error('body') <span className="text-red-500">{{ $message }}</span>@enderror */}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Save
                  </button>
                </span>
                {props.cancel}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
