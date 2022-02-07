import React from "react";

const Radio = ({ gender, setGender }) => {
  return (
    <div>
      <input
        type="radio"
        checked={gender === "مردانه"}
        value='مردانه'
        id="male"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="male" className="mr-3">male</label>
      <input
        type="radio"
        checked={gender === "زنانه"}
        value='زنانه'
        id="female"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="female">female</label>
    </div>
  );
};

export default Radio;

{
  /* <input type="radio" id="html" name="fav_language" value="HTML"  />
<label for="html">HTML</label>
<input type="radio" id="css" name="fav_language" value="CSS" />
<label for="css">CSS</label> */
}
