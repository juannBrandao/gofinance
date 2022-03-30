import React from "react";
import {Text} from 'react-native'
import { HighLightCard } from "../../components/HighLightCard";
import {
    Container,
    Header,
    UserInfo, 
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWraper,
    Icon,
    HighLightCards,

    } from './styles'

export function Dashboard(){
    return(
        <Container >
            <Header>
                <UserWraper>
                    <UserInfo>
                        <Photo source={{uri: 'https://avatars.githubusercontent.com/u/62782269?v=4'}} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Juann</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWraper>
            </Header>
            <HighLightCards >
                <HighLightCard type="up"  title={'Entradas'} amount={"1.50000"} lastTransaction={"ultima transação em 13 de março"} />
                <HighLightCard type="down" title={'Saidas'} amount={"1.50000"} lastTransaction={"ultima transação em 13 de março"} />
                <HighLightCard type="total" title={'Total'} amount={"1.50000"} lastTransaction={"ultima transação em 13 de março"} />
            </HighLightCards>
        </Container>
    )
}