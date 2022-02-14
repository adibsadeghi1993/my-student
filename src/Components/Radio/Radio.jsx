import React from "react";

const Radio = ({ gender, setGender }) => {
  return (
    <div className="flex mr-4 md:mr-3.5 lg:mr-0 ">
      <div className="mr-1">
        <label htmlFor="male" className="mr-1">
          male
        </label>
        <input
          type="radio"
          checked={gender === "مردانه"}
          value="مردانه"
          id="male"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="female" className="mr-1">
          female
        </label>
        <input
          type="radio"
          checked={gender === "زنانه"}
          value="زنانه"
          id="female"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
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
