import React, { useState } from 'react';

export default function Forme2() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [clien, setClien] = useState([]);

  const handelage = (e) => {
    const newage = e.target.value;
    setAge(newage);
    console.log(newage);
  };

  const handelname = (e) => {
    const newname = e.target.value;
    setName(newname);
    console.log(newname);
  };

  const handelcity = (e) => {
    const newncity = e.target.value;
    setCity(newncity);
    console.log(newncity);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const newClient = { name, age, city };
    setClien([...clien, newClient]); 
    console.log(newClient);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={handelname} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" value={age} onChange={handelage} />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={city} onChange={handelcity} />
        </div>

        <input type="button" value="Submit" onClick={submitForm} />
      </form>
      <div>
        {clien.map((client, index) => (
          <div key={index}>
            <p>Name: {client.name}, Age: {client.age}, City: {client.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
