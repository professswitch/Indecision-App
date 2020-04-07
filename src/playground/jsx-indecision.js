console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'An app to demonstrate react capabilities',
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  console.log('form submitted');

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const makeADecision = () => {
  const randomOption = Math.floor(Math.random() * app.options.length);
  console.log(randomOption);
  const option = app.options[randomOption];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options && app.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        <p>No options</p>
      )}
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={makeADecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
