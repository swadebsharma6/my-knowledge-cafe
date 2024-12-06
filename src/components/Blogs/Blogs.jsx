import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
      const [blogs, setBlogs] = useState([]);

      useEffect(()=>{
            fetch('/blogs.json')
            .then(res => res.json())
            .then(data =>{
                  setBlogs(data)
            })
      }, []);

      return (
            <div className="md:w-2/3">
                  
                 <div>
                  {
                        blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleReadingTime={handleReadingTime}
                        ></Blog>)
                  }
                 </div>
            </div>
      );
};

export default Blogs;