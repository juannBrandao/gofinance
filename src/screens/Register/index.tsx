import React,{useState} from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"

import {InputForm} from '../../components/Form/InputForm'
import {Button} from '../../components/Form/Button'
import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType,
    
 } from './styles';
import { TrandsactionTypeButton } from '../../components/TrandsactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import {CategorySelect} from '../../screens/CategorySelect'

interface FormData{
  name:string;
  amount:string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('informe um valor numerico')
    .positive('O valor não pode ser negativo')
    .required('Nome é obrigatório')
})

export function  Register() {
  const [transactionType, setTransactionType ] = useState('')
  const [categoryModalOpen, setCategoryModalOpen ] = useState(false)
  const [category, setCategory] = useState({
    key:'category',
    name:'categoria',
  })

  const {
    control,
    handleSubmit, 
    formState:{errors}
  } = useForm(({
    resolver: yupResolver(schema)
  }))
  function handleTransactionTypeSelect(type:'up'|'down'){
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }
  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }
  function handleRegister(form: FormData){
    if (!transactionType){
      return Alert.alert('Selecione o tipo da transação')
    }
    if (category.key === 'category'){
      return Alert.alert('Selecione a categoria')
    }
    const data = {
      name: form.name,
      amount: form.amount,
      category:category.key,
      transactionType,
    }
    console.log(data)
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
          <Header>
              <Title>Cadastro</Title>
          </Header>
          <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder='Nome'
              autoCapitalize="words"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              placeholder='Preço'
              control={control}
              name="amount"
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />
            <TransactionsType>
              <TrandsactionTypeButton
                type='up' 
                title='Income'
                onPress={()=> handleTransactionTypeSelect('up')}
                isActive={transactionType === 'up'}
                />
              <TrandsactionTypeButton 
                type='down' 
                title='Outcome'
                onPress={()=> handleTransactionTypeSelect('down')}
                isActive={transactionType === 'down'}
               />
            </TransactionsType>
            <CategorySelectButton 
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
              />
          </Fields>
            <Button 
              title='Enviar'
              onPress={handleSubmit(handleRegister)}
            />
          </Form>
        <Modal visible={categoryModalOpen}>
        <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
        />
        </Modal>
      </Container>
      </TouchableWithoutFeedback>
  )
}
