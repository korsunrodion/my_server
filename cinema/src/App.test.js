import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// let fetchTest = async () => {
//   fetch('http://tasks.korsunrodion.com/')
//   .then((response)=>response.json())
//   .then((responseJson)=>{return responseJson});
// }

// test('fills with movies data', () => {
//   var response = fetchTest();
//   console.log(response)
//   // console.log(response)
// });