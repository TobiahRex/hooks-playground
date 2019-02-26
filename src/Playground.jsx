import React from 'react';

export default class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [''],
      names: [],
    };
  }

  handleOnChange = (e) => {
    const { target } = e;

    this.setState((prevState) => {
      prevState.name.length = 0;
      prevState.name.push(target.value);
      return ({
        name: prevState.name,
      });
    });
  }

  handleSubmitName = () => {
    this.setState((state) => {
      state.names.push(state.name.join(''));
      state.name.length = 0;
      return ({
        names: state.names,
        name: state.name,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            placeholder={'Enter a name...'}
            value={this.state.name.join('')}
            onChange={this.handleOnChange}

            style={{
              paddingLeft: 5,
              border: 'none',
              marginTop: '30vh',
              width: '400px',
              height: '30px',
              fontSize: '14px',
            }}
          />
          <button
            style={{
              marginLeft: 5,
              width: '100px',
              height: '33px',
              fontSize: '14px',
              border: 'none',
            }}
            type="button"
            onClick={this.handleSubmitName}>
            Submit
          </button>
        </div>
        <div>
          <ul>
            {
              this.state.names.map((name) => (
                <li
                  key={name}
                  style={{
                    marginTop: 5,
                  }}>
                  {name}
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    )
  }
}

/*
  NOTE: Materials
    https://codesandbox.io/embed/github/elijahmanor/egghead-course-react-hooks/tree/omega/02-add-state-to-a-react-function-component-with-the-useState-hook/react-hooks
  NOTE: Course
    https://egghead.io/lessons/react-add-state-with-the-usestate-hook-to-a-react-function-component
*/
