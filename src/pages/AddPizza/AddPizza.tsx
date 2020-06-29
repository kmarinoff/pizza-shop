import React from "react";

import { Form } from "react-bootstrap";

import CreatableSelect from "react-select/creatable";

const AddPizza: React.FC = () => {
  const components = {
    DropdownIndicator: null
  };

  const [inputStringValue, setInputStringValue] = React.useState("");
  // const [arrayStringValues, setArrayStringValues] = React.useState<{
  //   label: string;
  //   value: string;
  // }>([]);

  const handleChange = (newValue: any, actionMeta: any) => {
    // console.group("Value Changed");
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.groupEnd();
    // setArrayStringValues()
  };

  const handleInputChange = (inputValue: string) => {
    setInputStringValue(inputValue);
  };

  const handleKeyDown = (event: any) => {
    const inputValue = inputStringValue;
    // const arrayValues = arrayStringValues;

    if (!inputValue) {
      return;
    }

    switch (event.key) {
      case "Enter":
      case "Tab":
        console.group("Value Added");
        // console.log(arrayValues);
        console.groupEnd();
        // setCreatableSelectState({
        //   inputValue: "",
        //   value: [...arrayValues, { label: inputValue, value: inputValue }]
        // });
        event.preventDefault();
    }
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Pizza Name</Form.Label>
          <Form.Control type="text" placeholder="Enter pizza name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pizza Ingredients</Form.Label>
          <CreatableSelect
            isMulti
            components={components}
            onInputChange={handleInputChange}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export { AddPizza };
