import React from 'react';
import photo from '../../assets/portfolio/workspace.jpg';
import {capitalizeFirstLetter} from '../../utils/helpers';

function Portfolio(props){
    const currentProject={
        name:"Individual",
        description:"Photos of individual front-end, backend and full Web Pages",
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
            <p>{currentProject.name}</p>
            <div>
             <img src={photo}/>
            </div>
        </section>
    );
}
export default Portfolio;