import ListGroup from "./ListGroup";

function App() {
  const items = [
      'Home',
      'Courses',
      'Contact',
      'Login/Register'
  ];

  return <div><ListGroup items={items}></ListGroup></div>
}

export default App;