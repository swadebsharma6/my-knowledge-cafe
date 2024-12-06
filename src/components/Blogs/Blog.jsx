import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {

  const { title, cover, author_img, author, readingTime, post_date, tags } =
    blog;
  return (
    <div className="p-5">
      <img src={cover} alt={title} className="rounded-lg" />
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <img className="w-14 mr-6" src={author_img} alt={author_img} />
          <div>
            <h3 className="font-bold">{author}</h3>
            <p>{post_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={()=>handleAddToBookmark(blog)}>
            <CiBookmark className="text-3xl mr-2 text-red-400" />
          </button>
          <p>Times {readingTime} min read</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">
        {tags.map((hash, idx) => (
          <span key={idx} className="mr-4">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
      onClick={()=> handleReadingTime(readingTime)}
      className="btn text-purple-600 underline">Mark as Read</button>
    </div>
  );
};

export default Blog;
