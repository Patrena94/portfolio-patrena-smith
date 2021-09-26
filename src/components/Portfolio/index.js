import React from 'react';
// import photo from '../../assets/portfolio/workspace.jpg';
import {capitalizeFirstLetter} from '../../utils/helpers';
import PhotoList from '../PhotoList';


function Portfolio(props){
    const {currentProject}= props;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
            <p>{currentProject.description}</p>
            <PhotoList category={currentProject.name}/>
            {/* <div>
             <img src={photo}/>
            </div> */}
        </section>
    );
}
export default Portfolio;