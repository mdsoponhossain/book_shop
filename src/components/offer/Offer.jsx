import books from '../../assets/images/books.png'
const Offer = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 bg-[rgb(243,246,247)]">
            <div className="container flex flex-col text-justify md:text-start justify-center lg:items-center p-3 md:p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={books} alt="" className="object-contain h-72 sm:h-80 lg:h-[550px] xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col md:justify-center md:p-6  rounded-sm w-full lg:max-w-md xl:max-w-3xl lg:text-left ">
                    <h1 className="text-xl  leading-none sm:text-4xl  ">বিশেষ অফার
                    </h1>
                    <h1 className="text-xl  leading-none sm:text-4xl text-red-600 my-2 md:my-3 lg:my-5">বই নিন এখন ৩০% ডিসকাউন্টে
                    </h1>
                    <h1 className="text-xl  leading-none sm:text-4xl text-red-600 ">ভাষা শিখুন
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                    নতুন একটি ভাষা শিখে আপনার জ্ঞান ও দক্ষতা বৃদ্ধি করুন এবং নতুন দিগন্তের সন্ধান করুন। এটি আপনাকে বিশ্বের সঙ্গে আরও গভীর সংযোগ স্থাপন করতে সহায়তা করবে ...
                        <br className="hidden md:inline lg:hidden" />
                    </p>
                    <div className="flex justify-center md:justify-start space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4   mx-auto w-full">
                        <button type="button" className="px-8 py-3 block rounded dark:border-gray-800 dark:text-gray-800 border-2 border-black">কিনুন</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;