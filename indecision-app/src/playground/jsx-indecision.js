console.log('App.js is running!');
// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();


    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    } 
}

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle ? app.subtitle : null}</p>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
        <button onClick={onRemoveAll}>Remove all</button>
        <ol>
        {
            app.options.map((options) => <li key={options}>{options}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add option</button>
        </form>
        </div>
        );
    ReactDOM.render(template, appRoot);
};

render();
