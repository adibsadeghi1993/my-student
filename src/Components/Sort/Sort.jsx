import React from "react";
import Select from "react-select";

const Sortoptions = [
  { value: "ASC", label: "ASC" },
  { value: "DEC", label: "DES" },
];

const Sort = ({ sortItem, setSortItem }) => {
  const sortHandler = (e) => {
    setSortItem(e.value);
    // console.log(e);  //{value: 'ASC', label: 'ASC'}
  };

  return (
    <div>
      <Select
        defaultValue={sortItem}
        onChange={sortHandler}
        options={Sortoptions}
      />
    </div>
  );
};

export default Sort;










// const Sort = ({ sortItem, setSortItem }) => {
//     return (
//         <div>
//           <select onChange={(e) => setSortItem(e.target.value)}>
//             <option value="all">all</option>
//             <option value="ACS">ACS</option>
//             <option value="DES">DES</option>
//           </select>
//         </div>
//     );
//   };

//   export default Sort;

// how to sort an array of object width lodash
