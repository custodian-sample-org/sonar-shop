import { Component } from 'react';
class App extends Component {
  constructor(...args) {
    super(args)
    this.state = {
      name: '',
      another: 3
    }
  }
  static readonly foo = 1;
  static readonly fooBar = 21;
  static readonly bar = (input) => {
    console.log(input);
  }
  static another(input) {
    console.error(input);
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps) {
    document.title = `You clicked ${this.state.count} times`;
    const { isOpen } = this.state;
    if (isOpen && !prevProps.isOpen) {
      alert("You just opened the modal!");
    }
  }
  alertName = () => {
    alert(this.state.name);
  };

  handleNameInput = e => {
    this.setState({ name: e.target.value, another: "cooler" });
  };
  async asyncAlert() {
    alert("async alert");
  }
  render() {
    return (
      <div>
        <h3>This is a Class Component</h3>
        <input
          type="text"
          onChange={this.handleNameInput}
          value={this.state.name}
          placeholder="Your Name"
        />
        <button onClick={this.alertName}>
          Alert
        </button>
        <button onClick={this.asyncAlert}>
          Alert
        </button>
      </div>
    );
  }
}
