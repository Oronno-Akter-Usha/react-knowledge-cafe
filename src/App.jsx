import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    const isExist = bookmarks.find(item => item.id = blog.id);
    if(!isExist){
      const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
    }
    else{
      toast('Already exists')
    }
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks ={bookmarks}></Bookmarks>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
