const Subscribe = () => {
    return (
      <div id="contact" className="bg-[url('/subscirbe.jpg')] max-w-7xl mx-auto h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center mb-14 rounded-2xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold py-2">Deliciousness to your inbox</h2>
          <p className="text-lg mt-2 max-w-[700px] mx-auto">
            Deliciousness to your inbox! 🍽️✨ Stay updated with mouthwatering
            recipes, exclusive food deals, and the latest culinary trends. Get
            handpicked flavors delivered straight to you. Subscribe now and never
            miss a bite of delicious inspiration!
          </p>
          
          {/* Centered Input Field with Button Inside */}
          <div className="relative w-[350px] mx-auto mt-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full border border-gray-300 py-3 px-4 rounded-2xl pr-20 outline-none bg-white"
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-black text-white rounded-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Subscribe;
  