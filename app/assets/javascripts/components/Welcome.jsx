class Welcome extends React.Component{
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Layout />
      </div>
    );
  }
};

let documentReady = () => {
  ReactDOM.render(
    <Welcome />, document.getElementById('react')
  );
};

$(documentReady)