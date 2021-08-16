import React, { useEffect, useState } from "react";

const Form = (props) => {
  const initialFieldValues = {
    id: "",
    title: "",
    author: "",
    isbn: "",
    Isok: "false",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "") setValues({ ...initialFieldValues });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onok = (value) => {
    setValues({
      ...values,
      Isok: true,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
    onok(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit} align="center">
      <div>
        <pre>
          {" "}
          <label>ID</label>
        </pre>
        <input
          pattern="[0-9]+"
          name="id"
          placeholder="Enter ID"
          value={values.id}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <pre>
          <label>Title</label>
        </pre>
        <input
          name="title"
          placeholder="Title"
          value={values.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <pre>
          <label>Author</label>
        </pre>
        <input
          name="author"
          placeholder="Author"
          value={values.author}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <pre>
          <label>ISBN</label>
        </pre>
        <input
          pattern="[0-9]+"
          name="isbn"
          placeholder="Isbn"
          value={values.isbn}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input type="submit" value="save" className="btn" />
      </div>
    </form>
  );
};

export default Form;