import React from 'react';
// import API from "../adapters/API";

const Doctor = (props) => {

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const formData = new FormData(event.target)
  //   API.submitPost(formData)
  //     .then(data => props.setPost(data.post))
  //     .catch(console.error);
  // }

  return (
    <form>
      <label htmlFor="caption">
        Name of Doctor
        <input type="text" name="name" />
      </label>
      <label htmlFor="caption">
        Email
        <input type="text" name="email" />
      </label>
      <label htmlFor="caption">
        Specialization
        <input type="text" name="specialization" />
      </label>
      <label htmlFor="image" >
        Upload image
        <input type="file" name="image" accept="image/*" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
  
}

export default Doctor;