import React from 'react';
import PropTypes from 'prop-types';
const Profil = (props) => {
    const handleName = (e) => {

        alert(props.fullName);
    }
    return (
        <div style={{ margin: 50 }}>
            <h1 style={{ textTransform: 'uppercase' }}>{props.fullName}</h1>
            <em style={{ fontSize: 10 }}>{props.profession}</em>
            <div style={{ display: 'flex' }}>
               
                {props.children}
            </div>
        <br></br>
       
            <a href="#" onClick={handleName} style={{ background: '#696969', color: '#DCDCDC', padding: "7px 7px", textDecoration: "none" }} >Who am I ?</a>
        </div>
    );
}

Profil.propTypes = {
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio : PropTypes.string,
};

Profil.defaultProps = {
    fullName: "unknown",
    profession :"unknow"
    
}
  

export default Profil;