import React, { useState } from 'react';
import Image from 'next/image'
import { Container, Vecto } from './styles';

export default function HardSkills({ stack, percent }) {
  //dois maps um com a quntidade de estrelas e um com a quantidade faltante
  const [estrelas, setEstrelas] = useState([])
  const faltante = 5 - percent

  for (let i = 1; i <= percent; i++) {
    estrelas.push(true)
  }

  for (let i = 1; i <= faltante; i++) {
    estrelas.push(false)
  }

  return (
    <Container>
      <h1>{stack}</h1>
      <Vecto>
        {
          estrelas.map((e) => (
            e ? <Image
              src="/image/VectorBlack.svg"
              alt="html"
              width={22}
              height={35}
              key={e.id}

            /> : <Image
              src="/image/Vector.svg"
              alt="html"
              width={22}
              height={35}
              key={e.id}
            />
          ))
        }
      </Vecto>

    </Container>
  );
}