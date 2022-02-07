import React from "react";

const CheckBox = ({ setCheckBoxValue, checkboxValue }) => {
    
  const checkBoxHandler = (e) => {
    if (e.target.checked) {
      setCheckBoxValue([...checkboxValue, e.target.value]);
    } else {
        setCheckBoxValue(
        checkboxValue.filter((item) => item !== e.target.value)
      );
    }
  };
  return (
    <div>
        <label className="ml-4"> کانادا</label>
        <input
          type="checkbox"
          name="city"
          value="CA"
          checked={checkboxValue.includes("CA")}
          onChange={checkBoxHandler}
        />

        <label className="ml-4"> امریکا</label>
        <input
          type="checkbox"
          name="city"
          value="US"
          checked={checkboxValue.includes("US")}
          onChange={checkBoxHandler}
        />

        <label className="ml-4"> استرالیا</label>
        <input
          type="checkbox"
          name="city"
          value="AS"
          checked={checkboxValue.includes("AS")}
          onChange={checkBoxHandler}
        />
    </div>
  );
};

export default CheckBox;

{
  /* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have a bike</label><br>
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
<label for="vehicle2"> I have a car</label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> I have a boat</label><br></br> */
}
