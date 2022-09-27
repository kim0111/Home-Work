import React from 'react';

const FuncComp = (props) => {
    return (
        <div>
            <h3>Name of video game: {props.name}</h3>
            <h3>Genre: {props.genre}</h3>
        </div>
    );
};

FuncComp.defaultProps = {name: "Valorant", genre: "Shooter"};
export default FuncComp;