import styled ,{css} from 'styled-components/native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

interface Props{
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<Props>`
    background-color: ${({theme, type}) =>
        type === "total" ? theme.colors.secondary : theme.colors.shape};
        
    width: ${RFValue(300)}px;
    border-radius: 7px;

    margin-right: ${RFValue(16)}px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;

    height: 230px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content:space-between;
`;

export const Title = styled.Text<Props>`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};

    color: ${({theme, type}) =>
        type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<Props>`
    font-size: ${RFValue(40)}px;
    ${(props)=>props.type ==='up' && css`
        color:${({theme}) => theme.colors.success};
    `}

    ${(props)=>props.type ==='down' && css`
        color:${({theme}) => theme.colors.attention};
    `}
    ${(props)=>props.type ==='total' && css`
        color:${({theme}) => theme.colors.shape};
    `}
`;

export const Foother = styled.View``;

export const Amount = styled.Text<Props>`
    font-family:${({theme}) => theme.fonts.mediun};
    font-size: ${RFValue(32)}px;
    color: ${({theme, type}) =>
        type === "total" ? theme.colors.shape : theme.colors.text_dark};
    margin-top: 38px;
`;

export const LastTransaction = styled.Text<Props>`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) =>
        type === "total" ? theme.colors.shape : theme.colors.text};
`;
