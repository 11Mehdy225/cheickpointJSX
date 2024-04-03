import React from 'react';
import {formation} from './Product';


const Image = () => {
    return (
        <div>
            <img  className="image"  src={require(`${formation.image}`)} alt="monImage" />
        </div>
    );
};

export default Image;