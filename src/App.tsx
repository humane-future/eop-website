import { Entry } from 'contentful';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EntryFields } from './types';
import useCMSData from './useCMSData';

export interface AppProps {
  data?: Entry<EntryFields>;
}

const Wrapper = styled.div`
  border: 1px solid;
`;

const App = ({ data: defaultData }: AppProps) => {
  const cmsData = useCMSData(defaultData);

  if (!cmsData) {
    return null;
  }

  return (
    <Wrapper>
      <h1>{cmsData.fields.title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default App;
