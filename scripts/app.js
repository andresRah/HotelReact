class App extends React.Component {
  render() {
    return <Home hotels={hotelsData}/>;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));