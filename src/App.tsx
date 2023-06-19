import ListGroup from "./ListGroup";

function App() {
  const items = [
      'Home',
      'Courses',
      'Contact',
      'Login/Register'
  ];

  const onClickExample = (value: string) => console.log(value);

  return <div><ListGroup items={items} onClickExample={onClickExample}></ListGroup></div>
}

export default App;