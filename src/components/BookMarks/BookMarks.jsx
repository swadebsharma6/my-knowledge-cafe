import BookMark from "./BookMark";


const BookMarks = ({bookMarks, readingTime}) => {
      return (
            <div className="md:w-1/3 bg-gray-200 rounded-lg mt-4 p-4 ">
                  <div className="bg-sky-300 rounded-lg">
                        <h3 className="p-4 text-2xl text-center ">Spent time on read : {readingTime} min</h3>
                  </div>
                <div className="bg-sky-500 p-4 rounded-md mt-4">
                <h2 className="text-2xl text-center bg-blue-300 p-2 rounded-lg">Book Marks: {bookMarks.length}</h2> 
                 <div>
                  {
                        bookMarks.map((bookMark, idx) => <BookMark
                        key={idx}
                        bookMark={bookMark}
                        ></BookMark>)
                  }
                 </div>
                </div>
            </div>
      );
};

export default BookMarks;