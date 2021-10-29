export default function News() {
  return (
    <div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-10">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48"
              src="https://picsum.photos/200/300"
              alt="Man looking at item at a store"
            />
          </div>
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
            <p class="mt-2 ">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
