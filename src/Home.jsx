import React from 'react';
import './Home.css';
import Info from './Info';
import characters from './characters';

function createInfo(character) {
    return (
        <Info 
            key = {character.id}
            img = {character.imageURL}
            name = {character.name}
            status = {character.status}
            species = {character.species}
            location = {character.location.name}
        />
    )
}

function Home() {
    return <div className='home'>
            
        {characters.map(createInfo)}
        
    </div>
}

export default Home;