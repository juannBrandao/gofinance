import React from "react";

import {
    Container,
    Header,
    Title,
    Icon,
    Foother,
    Amount,
    LastTransaction
} from './styles' 

interface Props{
    title:string;
    amount:string;
    lastTransaction:string;
    type: 'up' | 'down' | 'total';
}
const icon = {
    up:"arrow-up-circle",
    down:"arrow-down-circle",
    total:"dollar-sign",
}

export function HighLightCard({ type, title, amount, lastTransaction}:Props){
  return (
  <Container  type={type}>
      <Header>
          <Title type={type}>{title}</Title>
          <Icon name={icon[type]} type={type}/>
      </Header>
      <Foother>
          <Amount type={type}>{amount}</Amount>
          <LastTransaction type={type}>
             {lastTransaction}
          </LastTransaction>
      </Foother>
  </Container>
  )
}
