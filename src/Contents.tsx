import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
  margin: 0 20px;
`;

const Contents = () => {
  return (
    <Wrapper>
      {Array(30)
        .fill('')
        .map((value, index) => (
          <Paragraph key={index}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor
            dui, congue id venenatis a, consectetur sit amet erat. Nulla
            facilisi. Duis pharetra mollis quam, molestie tristique nisi
            pharetra eu. Mauris porttitor leo at quam fringilla, at vulputate
            velit lobortis. Nulla facilisi. Donec vel hendrerit lectus. Donec
            viverra fermentum mollis. Duis volutpat, dolor et maximus feugiat,
            odio arcu dictum velit, in pharetra tellus odio a diam. In ut cursus
            neque, sit amet suscipit ante. Praesent nec dolor vulputate,
            sagittis mauris at, imperdiet urna. Nullam varius odio sit amet nunc
            aliquam, eget euismod ex pellentesque. Suspendisse est tellus,
            bibendum in mattis sed, faucibus in ipsum. Nam eu euismod neque,
            eget lobortis purus. Nunc condimentum, metus non pulvinar ultrices,
            quam urna laoreet nisl, eget euismod dolor lacus in arcu. Ut blandit
            quam vitae efficitur viverra. Morbi ut interdum ex.
          </Paragraph>
        ))}
    </Wrapper>
  );
};

export default Contents;
