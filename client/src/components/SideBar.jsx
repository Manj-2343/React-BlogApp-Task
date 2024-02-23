import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-bold mb-2 ">{blog.title}</h4>
              <Link
                to={"/"}
                className="font-medium hover:text-orange-500 inline-flex items-center py-1 pb-2"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Popular Blogs */}
      <div className="">
        <h3 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(6, 11).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-bold mb-2 ">{blog.title}</h4>
              <Link
                to={"/"}
                className="font-medium hover:text-orange-500 inline-flex items-center py-1 pb-2"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
