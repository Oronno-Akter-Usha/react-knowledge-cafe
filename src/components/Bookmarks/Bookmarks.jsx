import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110d] ml-4 mt-6 rounded-lg">
            <h2 className="text-3xl text-center font-bold my-8">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key= {bookmark.id} bookmark= {bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmarks;