import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";


const App = () => {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark =(blog)=>{
    const newBookmarks = [...bookMarks, blog];
    setBookMarks(newBookmarks)
  }

  const handleReadingTime = (time) =>{
   
    setReadingTime(readingTime + time)
  }



  return (
    <div className=" max-w-7xl mx-auto">
       <Header/>
      <main className="md:flex">
       <Blogs 
       handleAddToBookmark={handleAddToBookmark}
       handleReadingTime={handleReadingTime}
       ></Blogs>
       <BookMarks
       bookMarks={bookMarks}
       readingTime={readingTime}
       ></BookMarks>
      </main>
    </div>
  );
};

export default App;