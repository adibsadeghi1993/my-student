import React from "react";

import Select from "react-select";

const optionsShoes = [
  { value: "all", label: "all" },
  { value: "آدیداس", label: "آدیداس" },
  { value: "نایک", label: "نایک" },
  { value: "تامی", label: "تامی" },
  { value: "گوچی", label: "گوچی" },
  { value: "ریبوک", label: "ریبوک" },
  { value: "ونس", label: "ونس" },
  { value: "اسکیچرز", label: "اسکیچرز" },
];

const Selected = ({ setSelect ,select }) => {
  return (
   
     <div>
      <Select
        className="rounded-lg"
        defaultValue={select}
        onChange={(e)=>setSelect(e.value)}
        options={optionsShoes}
      />
    </div>
  );
};

export default Selected;


















// const Select = ({ setSelect }) => {
//   return (
//     <div>
//       <select name="shoes" className="rounded-lg" onChange={(e) => setSelect(e.target.value)}>
//         <option value="all">all</option>
//         <option value="آدیداس">آدیداس</option>
//         <option value="نایک">نایک</option>
//         <option value="تامی">تامی</option>
//         <option value="گوچی">گوچی</option>
//         <option value="ریبوک">ریبوک</option>
//         <option value="ونس">ونس</option>
//         <option value="اسکیچرز">اسکیچرز</option>
//       </select>
//     </div>
//   );
// };

// export default Select;







{/* <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}