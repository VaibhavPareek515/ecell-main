import './App.css'
import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from './components/Home'
import { BlogPost } from './components/BlogPost'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { AboutPage } from './components/AboutPage'
import { TeamPage } from './components/TeamPage'
import ScrollToTop from './components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<AboutPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/blogs/:id' element={<BlogPost />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App


// <JoditEditor
//       ref={editor}
//       content={content}
//       onChange={newContent=>setContent(newContent)}
//       />
//       <h1><br/></h1>
//       <h1><br/></h1>
//       <h1><br/></h1>
//       <h1><br/></h1>
//       <h1><br/></h1>
//       <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
//         <div style={{width:"50vw"}}>{parser(content)}</div>
//       </div>