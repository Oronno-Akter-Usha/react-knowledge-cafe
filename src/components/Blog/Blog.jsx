import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {
    // console.log(blog)
    const {id, title, cover, author, author_img, reading_time, post_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-8 mb-4'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full ' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>{handleAddToBookmark(blog)}}
                     className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p className='mb-6'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='mr-2' href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='underline text-blue-500' href="">Mark as read</button>
            <hr  className='mt-8'/>

        </div>
    );
};

Blog.propType = {
    blog: PropTypes.object.isRequired
}

export default Blog;