import React from 'react';
import "./accordionItem.css";
const AccordionItem =({heading,description, isOpen, handleClick}) => {
    return (
        <div className="accordionItem">
            <div className="heading" onClick={() => handleClick(heading)}>{heading}</div>
            <p className={`${isOpen? 'active': ''}`}>{description}</p>
        </div>
    );
}
export default AccordionItem;