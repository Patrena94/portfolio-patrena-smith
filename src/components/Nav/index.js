import React from "react";
import logo from "../../assets/logo/PADSlogo.png";

function Nav() {
    const categories = [
        {
          name: "Portfolio",
          description:
            "body of work",
        },
        { name: "Resume", description: "Professional work Experience" },

      ];
    function categorySelected(name){
        console.log(`${name}clicked`)
    } 
  return (
    <header>
     <h2>
         <img src={logo}/>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={categorySelected} >
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
    </header>
  );
}

export default Nav;
