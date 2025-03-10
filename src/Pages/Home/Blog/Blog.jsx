import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Recipes for a Healthy Lifestyle",
      image: "https://pipingpotcurry.com/wp-content/uploads/2022/12/Top-10-recipes-2022-1.jpg",
      date: "March 5, 2025",
      description: "Discover delicious and nutritious recipes to maintain a healthy lifestyle with fresh ingredients.",
    },
    {
      id: 2,
      title: "Top 5 Desserts to Satisfy Your Sweet Tooth",
      image: "https://www.hungryhuy.com/wp-content/uploads/best-filipino-desserts.jpg",
      date: "March 2, 2025",
      description: "Indulge in these mouth-watering desserts that will make your taste buds dance with joy!",
    },
    {
      id: 3,
      title: "How to Cook Like a Pro: Essential Kitchen Tips",
      image: "https://www.lexusallstarchefclassic.com/uploads/7/5/3/3/75335519/just-for-you_orig.png",
      date: "February 28, 2025",
      description: "Master the art of cooking with these essential tips and tricks to elevate your culinary skills.",
    },
  ];

  return (
    <section id="blog" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Latest <span className="text-sky-400">Blog Posts</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Smaller image size */}
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                {/* Smaller text size */}
                <p className="text-gray-500 text-xs">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{post.description}</p>
                <a href="#" className="inline-block mt-3 text-sky-400 font-semibold hover:underline text-sm">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
