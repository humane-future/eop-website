import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';
import Dialog from './Dialog';
import Modal from './Modal';

export interface ModalWithBackdropProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const ModalWithBackdrop = ({ children }: ModalWithBackdropProps) => {
  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'auto';
    };
  });
  return (
    <Modal>
      <Wrapper>
        <Backdrop />
        <Dialog>{children}</Dialog>
      </Wrapper>
    </Modal>
  );
};

export default ModalWithBackdrop;
