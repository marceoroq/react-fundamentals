// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({ onSubmitUsername }) {
  // Exercise 6
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onSubmitUsername(event.target.elements.username.value);
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input id="username" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  // // Exercise 6 - Extra Credit 1
  // const inputRef = React.useRef(null);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onSubmitUsername(inputRef.current.value);
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input id="username" type="text" ref={inputRef} />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  // Exercise 6 - Extra Credit 2
  // const [error, setError] = React.useState(null);

  // console.log('rendering');

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onSubmitUsername(event.target.elements.username.value);
  // };

  // const handleChange = event => {
  //   const {value} = event.target;
  //   const isLowerCase = value === value.toLowerCase();
  //   setError(isLowerCase ? null : 'Username must be lower case');
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input id="username" type="text" onChange={handleChange} />
  //     </div>
  //     {error && (
  //       <p style={{color: 'red'}} role="alert">
  //         {error}
  //       </p>
  //     )}
  //     <button type="submit" disabled={Boolean(error)}>
  //       Submit
  //     </button>
  //   </form>
  // );

  //Exercise 6 - Extra Credit 3
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(inputValue);
  };

  const handleChange = ({ target }) => {
    setInputValue(target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!inputValue}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
