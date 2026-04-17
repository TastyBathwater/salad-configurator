import React, { type ReactNode } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop overlay */}
            <div 
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            ></div>
             <div className="relative bg-white rounded-lg shadow-xl z-10 max-w-md w-full mx-4">
                {children}
            </div>
        </div>
    );
};

export default Modal;