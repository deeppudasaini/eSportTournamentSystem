import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Updates() {
  return (
    <div>
      <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl text-center testTwo">
        Updates
      </h3>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/*Card 1*/}
        <div className="rounded overflow-hidden shadow-lg">
          <LazyLoadImage
            src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-team-work-from-home-sbts2018-flat-sbts2018.png"
            alt="Teams"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Teams</div>
            <h4>6</h4>
          </div>
        </div>
        {/*Card 2*/}
        <div className="rounded overflow-hidden shadow-lg">
          <LazyLoadImage
            src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-tournament-esport-itim2101-lineal-color-itim2101-1.png"
            alt="Tournaments"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tournaments</div>
            <h4>10</h4>
          </div>
        </div>
        {/*Card 3*/}
        <div className="rounded overflow-hidden shadow-lg">
          <LazyLoadImage
            src="https://img.icons8.com/ios/50/000000/billboard.png"
            alt="Posts"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> Posts</div>
            <h4>42</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
