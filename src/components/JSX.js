import React from 'react';
import Example from './Example';
import styled from 'styled-components';

export function Example1 () {
  const title = "JSX에 표현식 넣기"

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Kim',
    lastName: 'Muang'
  }

  return (
  <Example title={title}>
    <h2>Hello, {formatName(user)}!</h2>  
  </Example>
  )
}

function Example2 () {
  const title = "JSX를 createElement로 생성하기"
  
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Kim',
    lastName: 'Muang'
  }

  const element = React.createElement(
    'h2',
    {className: 'Hello'},
    `Hello, ${formatName(user)}!`
  )

  return <Example title={title}>{element}</Example>
}


function JSX() {
  return (
    <>
    <Example1 />
    <Example2 />
    </>
  )
}

export default JSX;