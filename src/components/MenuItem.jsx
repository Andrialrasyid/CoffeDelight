// import React from 'react';

// const MenuItem = ({ name, price, description, image }) => {
//     return (
//         <div className="card h-100">
//             <img 
//                 src={image} 
//                 alt={name} 
//                 className="card-img-top" 
//                 style={{ height: '200px', objectFit: 'cover' }} 
//             />
//             <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 <p className="card-text">{description}</p>
//                 <p className="text-success fw-bold">Rp {price.toLocaleString('id-ID')}</p>
//             </div>
//         </div>
//     );
// };

// export default MenuItem;

import React, { Component } from 'react';

class MenuItem extends Component {
    render() {

        const { name, price, description, image } = this.props; 

        // const name = this.props.name;
        // const price = this.props.price;
        // const description = this.props.description;
        // const image = this.props.image;

        return (
            <div className="card h-100">
                <img 
                    src={image} 
                    alt={name} 
                    className="card-img-top" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="text-success fw-bold">Rp {price.toLocaleString('id-ID')}</p>
                </div>
            </div>
        );
    }
}

export default MenuItem;

