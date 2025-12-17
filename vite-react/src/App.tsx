
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

/* 클래스 컴포넌트 
import { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello, Class Component!</h1>
  }
}

export default App;
*/

/* 함수형 컴포넌트 2 : 함수 표현식 
const App = function App() {
  return (
     <>
      <h1>Hello, Function Component!</h1>
    </>
  );
};

export default App;

 */



/* 함수형 컴포넌트 3 : 화살표 함수 
const App = () => {
  return (
     <>
      <h1>Hello, Function Component!</h1>
    </>
  );
};


export default App;
*/