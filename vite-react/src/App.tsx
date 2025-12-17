import User from './components/User';

export default function App() {
  const userObj = {
    name : '수정',
    age : 27,
  };

  const clickHandler = () => {
    console.log("clicked");
  };
  
  return <User userObj={userObj} clickHandler={clickHandler} />;
}
