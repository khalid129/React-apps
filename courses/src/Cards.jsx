import React from 'react';

function Cards(props) {
    return (
        <>
            <div className='cards'>
                <div className='card'>
                    <img src={props.imgscr}
                        alt='There would be an content'
                        className='card_img' />
                    <div className='card_info'>
                        <span className='card_category'>{props.category}</span>
                        <h3 className='name'>{props.name}</h3>
                        <a className = 'link' href={props.link} target="_new">
                            <button className='button'>CLICK HERE</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;