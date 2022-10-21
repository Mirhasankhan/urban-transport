import React from 'react';
import { Link } from 'react-router-dom';
import Transport from '../Transport/Transport';


const Home = () => {
    const style = {
        display: 'flex',
        marginTop: '150px',    
        marginLeft: '100px',
        marginRight: '100px',   
        justifyContent: 'space-between',
     
    }
    const vehicles= [
        {
            name: 'BIKE',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://raw.githubusercontent.com/ProgrammingHero1/urban-riders/main/images/Frame.png',
            
        },
        {
            name: 'CAR',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://raw.githubusercontent.com/ProgrammingHero1/urban-riders/main/images/Frame-2.png'
            
        },
        {
            name: 'BUS',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://raw.githubusercontent.com/ProgrammingHero1/urban-riders/main/images/Frame-1.png'
            
        },
        {
            name: 'TRAIN',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: 'https://raw.githubusercontent.com/ProgrammingHero1/urban-riders/main/images/Group.png'
            
        }
    ]
    return (
        <div style={style}>
            {
                vehicles.map(vehicle => <Link to="/destination"><Transport vehicle={vehicle}></Transport></Link>)
            }
        </div>
    );
};

export default Home;