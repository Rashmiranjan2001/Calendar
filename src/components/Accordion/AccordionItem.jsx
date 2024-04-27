import React from "react";

const AccordionItem = ({children, isOpen, header,...attr}) => {
    return (
        <div {...attr}>
            {header && header(isOpen)}
            {isOpen && children}
        </div>
    )
}


export default AccordionItem