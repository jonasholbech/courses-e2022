function Parent(props) {
  const myCallback = (e) => {
    console.log("a child sent this up", e);
  };
  return <Child childClickHandler={myCallback} />;
}

function Child(props) {
  return <button onClick={props.childClickHandler}>Click Me</button>;
}
