import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [showName, setShowName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.firstName && name.lastName) {
      setShowName(true);
    }
  };

  const handleName = (e) => {
    setName((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value.trim(), // Trim whitespace from input
      };
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label>First Name:</label>
        <input type="text" name="firstName" required onChange={handleName} />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastName" required onChange={handleName} />
        <br />
        <button type="submit">Submit</button>
      </form>
      {showName && (
        <p>
          Full Name : {name.firstName} {name.lastName}
        </p>
      )}
    </div>
  );
}

export default App;
