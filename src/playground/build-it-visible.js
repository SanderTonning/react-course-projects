console.log('Visibility app running!')

// JSX

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            paragraph: '',
            buttonClicked: false,
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            this.state.buttonClicked = !this.state.buttonClicked
            if(this.state.buttonClicked) {
               return this.state.paragraph = 'This is some text you can see'
            } else {
                return {
                    buttonClicked: prevState.buttonClicked,
                    paragraph: ''
                }
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Toggle Visiblity</h1>
            <p>{this.state.paragraph}</p>
            <button onClick={this.handleToggleVisibility}>{this.state.buttonClicked ? 'Hide details' : 'Show details'}</button>
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const app = {
//     title: 'Toggle Visibility',
//     paragraph: '',
//     buttonClicked: false,
// }

// const onToggleVisibility = () => {
//     app.buttonClicked = !app.buttonClicked
//     if(app.buttonClicked) {
//         app.paragraph = 'This is some text you can see'
//     } else {
//         app.paragraph = ''
//     }
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//     <div>
//     <h1>{app.title}</h1>
//     <p>{app.paragraph}</p>
//     <button onClick={onToggleVisibility}>{app.buttonClicked ? 'Hide details' : 'Show details'}</button>
//     </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// render();