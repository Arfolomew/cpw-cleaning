const reviews = [
  {
    text: "Came to my house and was presentable and kind. Did all the windows and screens in my home and I'll say, I had been putting this off for awhile. Super reasonably priced. The windows and screens are immaculate.",
    author: "Danilo Atenza",
  },
  {
    text: "Andrew was a cold call at my front door today. Andrew cleaned all my windows and screens on our 2-story home. Can I mention again how happy I am that I answered my door this afternoon??!!",
    author: "Tracey W",
  },
  {
    text: "We had such a great experience with Clear Point Window Cleaning. We will be using them for our maintenance from now on.",
    author: "CR Yenob",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#FF662A]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
          What Clients Say
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1E32] mb-12">
          5-Star Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#F5F5F5] rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-200"
            >
              {/* Large quotation mark */}
              <div className="text-7xl text-[#1FC6C7] font-serif leading-none mb-2 select-none" aria-hidden="true">
                &ldquo;
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm lg:text-base">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-bold text-[#1A1E32]">{review.author}</p>
                <Stars />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#1FC6C7] text-[#1FC6C7] font-semibold rounded-md hover:bg-[#1FC6C7] hover:text-[#1A1E32] transition-all duration-150"
          >
            Read More Reviews on Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
