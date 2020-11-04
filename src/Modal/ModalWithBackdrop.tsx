import React, { KeyboardEvent, ReactNode, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { HotKeys } from 'react-hotkeys';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../Heading';
import SearchInput from '../SearchInput';
import Backdrop from './Backdrop';
import CloseButton from './Close/CloseButton';
import Dialog from './Dialog';
import Modal from './Modal';

export interface ModalWithBackdropProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

const SearchWrapper = styled.div`
  margin: 20px 0;
`;

const CLOSE_MODAL_ACTION = 'CLOSE_MODAL';

const keyMap = {
  [CLOSE_MODAL_ACTION]: 'escape',
};

const SEARCH_RESULTS_TITLE = 'Search Results';

const ModalWithBackdrop = ({
  children,
  open,
  onClose,
}: ModalWithBackdropProps) => {
  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'auto';
    };
  });

  const closeModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (onClose && event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const handlers = {
    [CLOSE_MODAL_ACTION as string]: closeModal,
  };
  return (
    <AnimatePresence>
      {open && (
        <Modal>
          <HotKeys keyMap={keyMap} handlers={handlers}>
            <Wrapper
              key="modal-wrapper"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            >
              <Backdrop onClick={onClose} />
              <Dialog aria-label={SEARCH_RESULTS_TITLE}>
                <ButtonWrapper>
                  <CloseButton onClick={onClose} />
                </ButtonWrapper>
                <Heading level={1} size={1}>
                  {SEARCH_RESULTS_TITLE}
                </Heading>
                <SearchWrapper>
                  <SearchInput onKeyUp={onKeyUp} autoFocus />
                </SearchWrapper>
                {children}
              </Dialog>
            </Wrapper>
          </HotKeys>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ModalWithBackdrop;
