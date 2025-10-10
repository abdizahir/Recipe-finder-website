import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
// import { NavLink } from 'react-router-dom';
// import Button from './Button';


export default function Modal({children, open, onClose}) {
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current;

        if(open) {
            modal.showModal();
        }
        return () => modal.close();
    }, [open])
    return createPortal(     
        <dialog ref={dialog} className='modal' onClose={onClose}>
            {children}
        </dialog>
        ,document.getElementById('menu-root')
    );
}