import React from "react";
import logo from "../../assets/logo/PADSlogo.png";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
      projects = [ ],
      setCurrentProject,
      currentProject,
    }=props;
  
   const handleClick =(item) =>{
     console.log(item);
     return item;
   };
  
  return (
    <header className="flex-row px-1">
     <h2>
         <img src={logo}/>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a data-testid="about" href="#about">
          About me
        </a>
      </li>
      <li className={"mx-2"}>
        <span onClick={() => handleClick('contact')}>Contact</span>
      </li>
       {Projects.map((project) => (
        <li
          className="mx-1"
          key={project.name}
        >
          <span onClick={() => {
            setCurrentProject(project);
          }}
          >
            {capitalizeFirstLetter(project.name)}
          </span>
        </li>
      ))}
    </ul>
  </nav>
    </header>
  );
}

export default Nav;
