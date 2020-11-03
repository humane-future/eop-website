import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return createPortal(
    children,
    document.getElementById('modal-wrapper') as Element,
  );
};

export default Modal;
