import { tokens } from './tokens'


export const getColor = (colorNameAndVarient) => {
  let colorName = '';
  let colorVarient = '';
  
  if (colorNameAndVarient.includes('/')) {
    let cNameVarient = colorNameAndVarient.split('/');
    return tokens[colorName][colorNameAndVarient]
  } else {
    return tokens.colors[colorNameAndVarient]
  }
}

getColor('promary/500')