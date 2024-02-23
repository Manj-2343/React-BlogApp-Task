import { useEffect, useState } from "react";
import BlogCard from "../pages/BlogCard";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      //filtered by Category
      if (selectedCategory) {
        url += `&category = ${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);
  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
  return (
    <div>
      {/* Category Section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      {/* Blogs Card  sections */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* blog Components */}
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
        {/* side bar component */}
        <div>
          <SideBar />
        </div>
      </div>
      {/* Pagination Section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
      {/* <pre>{JSON.stringify(blogs,null,4)}</pre> */}
    </div>
  );
};

export default BlogPage;
