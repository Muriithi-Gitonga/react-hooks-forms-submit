import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value
    }

    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray)
    setFirstName("")
    setLastName("")
  }

    const listOfSubmissions = submittedData.map((data,index) => 
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )



  return (
    <form onSubmit={handleSubmit} >
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </form>
  );
}

export default Form;
