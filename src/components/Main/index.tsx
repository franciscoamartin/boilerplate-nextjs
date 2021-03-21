import React from 'react';
import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, React, NextJs'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo e React Avançado" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor em frente a tela"
    />
  </S.Wrapper>
);

export default Main;
