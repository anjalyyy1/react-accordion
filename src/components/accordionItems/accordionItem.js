import React from 'react';
import "./accordionItem.css";
const AccordionItem =({heading,description}) => {
    return (
        <div className="accordionItem">
            <div className="heading">{heading}</div>
            <p>{description}</p>
        </div>
    );
}
export default AccordionItem;