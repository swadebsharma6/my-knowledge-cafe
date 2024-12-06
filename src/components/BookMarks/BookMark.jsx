

const BookMark = ({bookMark}) => {
      const {title} = bookMark;
      return (
            <div className=" bg-orange-100 p-4 rounded-lg m-4">
                <h3 className="text-2xl font-medium text-orange-600">{title}</h3>  
            </div>
      );
};

export default BookMark;