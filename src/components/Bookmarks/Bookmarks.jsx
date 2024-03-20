import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110d] ml-4 mt-6 rounded-lg">
            <div className='my-5 py-5 rounded-lg bg-[#6047ec25] border-2 border-[#6047EC]'>
                <h3 className='text-4xl text-center  text-[#6047EC]'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center font-bold my-8">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key= {index} bookmark= {bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;