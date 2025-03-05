import React from 'react';

const TitleText = ({ text }) => {
    const underlineStyle = {
        display: 'inline-block',
        width: '75%',
        height: '3px',
        backgroundColor: '#FFC90E',
        marginTop: '5px'
    };

    return (
        <div className='flex flex-col items-start my-4 w-fit'>
            <p style={{fontFamily: 'Alegreya Sans SC'}} className='text-5xl text-left'>{text}</p>
            <div style={underlineStyle}></div>
        </div>
    );
};

export default TitleText;