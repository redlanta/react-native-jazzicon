# react-native-jazzicon-custom-colors

[![NPM version][npm-image]][npm-url]

This is a forked version for [stanislaw-glogowski's](https://github.com/stanislaw-glogowski)[react-native-jazzicon](https://github.com/stanislaw-glogowski/react-native-jazzicon)

## Installation

```bash
  $ npm i react-native-jazzicon-custom-colors -S
  $ react-native link react-native-svg
```

## Usage

With numeric `seed`: 

```js
import Jazzicon from 'react-native-jazzicon-custom-colors'
 
export default class App extends React.Component {
   render() {
      return (
        <Jazzicon colors={myColorsArray} size={120} seed={Math.round(Math.random() * 10000000)} />
      );
  }
}
```

With ethereum `address`: 

```js
import Jazzicon from 'react-native-jazzicon-custom-colors'
 
export default class App extends React.Component {
   render() { 
      return ( 
        <Jazzicon colors={myColorsArray} size={120} address={"0x2152220ab60719d6f987f6de1478971c585841c7"} />
      );
  }
}
```

## License

The MIT License

[npm-image]: https://badge.fury.io/js/react-native-jazzicon.svg
[npm-url]: https://npmjs.org/package/react-native-jazzicon


