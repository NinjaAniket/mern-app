import React, { useCallback } from "react";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";

function NewPlace(props) {
  //useCallback is used to avoid rerending the useEffect

  const InputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        errorText="Please enter valid title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={InputHandler}
      />

      <Input
        id="description"
        element="textarea"
        type="text"
        label="description"
        errorText="Description must be atleast 5 character"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={InputHandler}
      />
    </form>
  );
}

export default NewPlace;
