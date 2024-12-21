import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 md:px-8">
      {/* <!-- About Us Section --> */}
      <section className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          আমাদের সম্পর্কে
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          আমরা বইপ্রেমীদের জন্য একটি বিস্তৃত বইয়ের সংগ্রহ নিয়ে এসেছি। আমাদের
          বইয়ের দোকানটি বাংলা সাহিত্য, ইংরেজি সাহিত্য, ইতিহাস, বিজ্ঞান,
          কল্পকাহিনী, আত্ম-উন্নতি এবং আরো অনেক ধরনের বইয়ের একটি বিস্তৃত সংগ্রহ
          প্রদান করে। আমাদের লক্ষ্য হল পাঠকদের জন্য মানসম্পন্ন বই সহজলভ্য করা।
        </p>
        <p className="text-lg text-gray-700">
          আমাদের দোকানে আমরা সেরা বইগুলোর সংগ্রহ সুনির্দিষ্টভাবে নির্বাচন করি,
          যা পাঠকদের জ্ঞানের বিস্তার ঘটাতে সহায়ক। আমাদের কর্মীবৃন্দ সাহায্য
          করতে প্রস্তুত এবং আমরা আপনার বই খুঁজে পেতে সর্বাত্মক সহায়তা প্রদান
          করি।
        </p>
      </section>

      {/* <!-- Mission Section --> */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          আমাদের লক্ষ্য
        </h3>
        <p className="text-lg text-gray-700">
          আমাদের উদ্দেশ্য হল বইয়ের মাধ্যমে মানুষের জীবনকে সমৃদ্ধ করা এবং
          পাঠকদের একটি ভালো পাঠ অভিজ্ঞতা প্রদান করা। আমরা নিশ্চিত করি যে আমাদের
          গ্রাহকরা তাদের পছন্দের বই দ্রুত এবং সহজেই খুঁজে পাবেন।
        </p>
      </section>

      {/* <!-- Values Section --> */}
      <section>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          আমাদের মূল্যবোধ
        </h3>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>গুণগত মানের বই প্রদান</li>
          <li>গ্রাহক সেবা সর্বোচ্চ অগ্রাধিকার</li>
          <li>সাশ্রয়ী মূল্যে বই বিক্রয়</li>
          <li>সমাজের উন্নয়নে অবদান রাখা</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
