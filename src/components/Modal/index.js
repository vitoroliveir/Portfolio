import React from 'react';

import {
  Container,
  ContainerModal,
  Close,
  IoClose
} from './styles';

export default function Modal({children}) {
  return (
    <Container>
      <ContainerModal>
        <Close><IoClose /></Close>
        {children}
      </ContainerModal>
    </Container>
  );
}