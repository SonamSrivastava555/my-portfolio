import React from "react"
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import About from "./Component/About"
import Experience from "./Component/Experience"
import Projects from "./Component/Project"
import Footer from "./Component/Footer"




function App() {
 

  return (
    <>
     <div className="bg-sky-900 h-auto w-full overflow-hidden">
<Navbar/>
<Home />
<About/>
<Experience/>
<Projects />
<Footer/>

     </div>

    </>
  )
}

export default App
