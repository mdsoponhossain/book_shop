import bannerImage from '../../assets/images/home-banner-image.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:h-[600px] h-fit">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                <img
                    src={bannerImage}
                    className="w-[700px] h-[350px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold"><span className='text-6xl text-red-600'>বই ঘর,</span>এখন আপনার সেবায় !</h1>
                    <p className="py-6">
                    আপনার পছন্দের বই সংগ্রহ করুন এখান থেকেই! আমরাই আপনার পছন্দের বইটি পৌছে দিচ্ছি আপন ঠিকানায়। আজই অর্ডার করুন বইঘর থেকে ...
                    </p>
                    <button type="button" className="px-8 py-3 font-semibold border border-black rounded dark:border-gray-800 dark:text-gray-800">বই খুজুন</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;