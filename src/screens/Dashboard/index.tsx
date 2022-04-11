import React from "react";
import { HighLightCard } from "../../components/HighLightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
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
    Transactions,
    Title,
    ListTransactions,
    LogOutButton,

    } from './styles'

    export interface DataListProps extends TransactionCardProps{
        id:string
    }
export function Dashboard(){
    const data:DataListProps[] = [{
        id:'1',
        type:'positive',
        title:"desenvolvimento de site",
        amount:"R$ 390000,000",
        date:"15/02/2022",
        category:{
            name:'vendas',
            icon:'dollar-sign'
        },
    },
        {
            id:'2',
            type:'negative',
            title:"KFC",
            amount:"R$ 390000,000",
            date:"15/02/2022",
            category:{
                name:'alimentação',
                icon:'coffee'
            },
        },
        {
            id:'3',
            type:'negative',
            title:"aluguel",
            amount:"R$ 390000,000",
            date:"15/02/2022",
            category:{
                name:'casa',
                icon:'home'
            },
        }
    ]
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
                    <LogOutButton onPress={()=>{}}>
                        <Icon name="power" />
                    </LogOutButton>
                </UserWraper>
            </Header>
            <HighLightCards >
                <HighLightCard 
                    type="up"  
                    title={'Entradas'} 
                    amount={"1.50000"} 
                    lastTransaction={"ultima transação em 13 de março"} 
                />
                <HighLightCard 
                    type="down" 
                    title={'Saidas'} 
                    amount={"1.50000"} 
                    lastTransaction={"ultima transação em 13 de março"} 
                />
                <HighLightCard 
                    type="total" 
                    title={'Total'} 
                    amount={"1.50000"} 
                    lastTransaction={"ultima transação em 13 de março"} 
                />
            </HighLightCards>
            <Transactions>
                <Title> Listagem</Title>
                <ListTransactions
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <TransactionCard data={item}/>}
                />
            </Transactions>
        </Container>
    )
}