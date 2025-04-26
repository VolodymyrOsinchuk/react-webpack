import React, { useState } from "react"
import axios from "axios";

export default function ImagePage () {
  const [file, setFile] = useState(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    const config = {
      header: {
        "content-type" : "multipart/form-data"
      },
    };
    axios.post("/image", formData, config)
      .then((response) => {
        console.log("The file is successfully uploaded", response)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  const onChange = (event) => {
    setFile({ file: event.target.files[0]})
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input 
          type="file"
          name="image"
          value={file}
          onChange={onChange}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  ) 
}