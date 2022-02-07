import React from "react";

const Select = ({ setSelect }) => {
  return (
    <div>
      <select name="shoes" className="rounded-lg" onChange={(e) => setSelect(e.target.value)}>
        <option value="all">all</option>
        <option value="ادیداس">ادیداس</option>
        <option value="نایک">نایک</option>
        <option value="تامی">تامی</option>
        <option value="گوچی">گوچی</option>
        <option value="ریبوک">ریبوک</option>
        <option value="ونس">ونس</option>
        <option value="آسیکس">آسیکس</option>
        <option value="اسکیجرز">اسکیجرز</option>
      </select>
    </div>
  );
};

export default Select;




{/* <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}