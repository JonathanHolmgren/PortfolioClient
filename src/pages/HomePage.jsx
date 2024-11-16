import { useState} from "react";
import LiveChat from "../components/LiveChat"; 
import NavBar from "../components/Navbar";
 

export default function HomePage() {

  
    return (
      <>
      <NavBar/>
       <main>
          <section id="hero">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Nihil, eveniet.</p>
          </section>
        </main>
     
      </>
    );
  }
