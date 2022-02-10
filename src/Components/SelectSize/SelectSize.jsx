import React from "react";

const SelectSize = ({ size,setSize }) => {
  return (
      
    <div>
      <select name="size" className="rounded-lg" onChange={(e) => setSize(e.target.value)}>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
   
      </select>
    </div>
  );
};

export default SelectSize;


