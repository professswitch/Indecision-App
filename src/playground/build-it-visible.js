class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && <p>Here are some details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let showButton = false;

// const toggleButton = () => {
//   showButton = !showButton;
//   visibleApp();
// };

// const visibleApp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleButton}>
//         {showButton ? 'Hide details' : 'Show details'}
//       </button>
//       {showButton && <p>Here are some details</p>}
//     </div>
//   );

//   const appRoot = document.getElementById('app');

//   ReactDOM.render(template, appRoot);
// };

// visibleApp();
