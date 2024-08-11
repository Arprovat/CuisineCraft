import banner from '../../assets/image/cafe_cooking.jpg'
const Banner = () => {
    return (
        <div className='justify-center items-center'>
            <div className="absolute   w-350 h-150">
                <img className='rounded-lg '  src={banner} alt="this is a Banner" />
            </div>
            <div className="relative text-center  text-white">
        <h1 className="mt-1/2 text-4xl font-bold mb-4">Welcome to CuisineCraft</h1>
        <p className="mb-6">Discover delicious recipes and start cooking with our easy-to-follow guides.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Explore Now
        </button>
            </div>

        </div>
    );
};

export default Banner;