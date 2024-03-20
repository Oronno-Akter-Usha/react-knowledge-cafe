import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    setBookmarks([...bookmarks, blog])
    // const isExist = bookmarks.find(item => item.id = blog.id);
    // console.log(isExist)
    // if(!isExist){
    // setBookmarks([...bookmarks, blog])
    // }
    // else{
    //   toast('Already exists');
    // }
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead ={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks ={bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
