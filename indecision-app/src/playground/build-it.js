// console.log('App is running!');

// const app = {
//     title: 'Visibility Toggle',

// };

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// let visibility = false;

// const render = () => {
//     const template = (
//         <div>
//         <h1>{app.title}</h1>
//         <button onClick={toggleVisibility}
//         >{visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && (
//             <div>
//             <p>Hey.. These are some details you can now see!</p>
//             </div>
//         )
//         }
//         </div>
//     )
//     ReactDOM.render(template, document.getElementById('app'));
// };
// render();



class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
        }
    
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}
            >{this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                <p>Hey.. These are some details you can now see!</p>
                </div>
            )
            }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

