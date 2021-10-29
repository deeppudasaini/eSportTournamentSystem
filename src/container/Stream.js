import "./stream.css";
export default function Stream() {
  return (
    <div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
        <div class="md:flex">
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p class="mt-2">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="desktop-wrapper">
              <iframe
                width={560}
                height={315}
                src="//www.youtube.com/embed/f890SC1schE"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
