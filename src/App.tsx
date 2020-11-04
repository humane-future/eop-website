import { Entry } from 'contentful';
import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Contents from './Contents';
import GlobalStyles from './GlobalStyles';
import ModalWithBackdrop from './Modal/ModalWithBackdrop';
import theme from './theme';
import TopBar from './TopBar';
import { EntryFields } from './types';
import useCMSData from './useCMSData';

export interface AppProps {
  data?: Entry<EntryFields>;
}

const App = ({ data: defaultData }: AppProps) => {
  const cmsData = useCMSData(defaultData);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  if (!cmsData) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <TopBar onOpenModal={openModal} />
        <Contents />
        <ModalWithBackdrop onClose={closeModal} open={isModalOpen}>
          &nbsp;
        </ModalWithBackdrop>
      </div>
    </ThemeProvider>
  );
};

export default App;
