import "./register.css";
export default function Register() {
  return (
    <div>
      <div
        className="container flex justify-center items-center h-screen mx-auto
      
      
      "
      >
        <form
          action="#"
          className="w-40 p-4  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-white"
        >
          <div className="p-3">
            <input
              className="outline-none py-2 pr-4 block w-full"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="p-3">
            <input
              className="outline-none py-2 pr-4 block w-full"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="p-3">
            <input
              type="password"
              placeholder="Password"
              className="outline-none  py-2 pr-4 block w-full"
              required
            />
          </div>
          <div className="p-3">
            <input
              className="outline-none py-2 pr-4 block w-full"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="p-3 pt-4">
            <button className="w-full text-black py-2 pr-4 border-2 border-blue-600 rounded-lg px-3 py-2 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
