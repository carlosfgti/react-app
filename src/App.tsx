import Alert from "./Alert";
import ListGroup from "./ListGroup";

function App() {
  const items = [
      'Home',
      'Courses',
      'Contact',
      'Login/Register'
  ];

  const onClickExample = (value: string) => console.log(value);

  return <div>
    <Alert>
      <p>Text with <strong>strong</strong></p>
    </Alert>
    <ListGroup items={items} onClickExample={onClickExample}></ListGroup>
  </div>
}

export default App;