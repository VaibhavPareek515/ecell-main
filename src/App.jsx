import './App.css'
import {Route,Routes} from "react-router-dom"
import { Home } from './components/Home'
import { BlogPost } from './components/BlogPost'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs/:id' element={<BlogPost/>}/>
    </Routes>
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