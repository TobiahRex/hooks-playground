import React from 'react';

export default class Playground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: [''],
    };
  }

  handleOnChange = (e) => {
    const { target } = e;
    this.setState((prevState) => {
      prevState.name.push(target.value.slice(-1));
      return ({
        name: prevState.name,
      });
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder={'Enter a name...'}
          value={this.state.name.join('')}
          onChange={this.handleOnChange}

          style={{
            marginTop: '30vh',
            width: '400px',
            height: '30px',
            fontSize: '14px',
          }}
        />
      </div>
    )
  }
}
