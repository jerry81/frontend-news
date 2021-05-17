import { useState, useEffect } from "react";
import { debounce } from 'lodash' 

function getRand() {
  return Math.round(Math.random() * 1000);
}

export default function FunctionalComponent(props) {
  const list = new Array(20).fill(0).map(getRand);
  console.log("list is ", list);
  const [l] = useState(list);
  const [ld, setLd] = useState(l.filter(_ => true));
  const [searchStr, setSearchStr] = useState("5");
  const searchStrChanged = input => {
    
    debounce(setSearchStr, 300)(input.target.value);
    console.log("searchStr is now ", searchStr);
  };
  useEffect(() => {
    const filtered = l.filter(i => {
      console.log("searchStr is ", searchStr);
      console.log("i to string", i.toString());
      return i.toString().includes(searchStr.toString());
    });
    setLd(filtered)
    console.log("filtered is now ", filtered)
  }, [searchStr, l]);
  const renderList = () => {
      console.log('ld is ', ld)
    return ld.map((i, idx) => <li key={idx}>{i}</li>);
  };

  return (
    <div style={{ margin: "10px" }}>
      <div>
        filter:
        <input value={searchStr} onChange={searchStrChanged} />
      </div>
      <div>
        <span>list: </span>
        <ul>{renderList()}</ul>
      </div>
    </div>
  );
}
