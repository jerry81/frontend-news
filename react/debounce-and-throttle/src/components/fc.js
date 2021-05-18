import { useState, useEffect, useMemo } from "react";
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
    setSearchStr(input.target.value);
    console.log("searchStr is now ", searchStr);
  };

  const db = useMemo(
    () => { 
        console.log('hello') 
        return debounce(setLd, 300)
    },
    []    
  )
/*   const debouncedChangeHandler = useMemo(
    (list) => debounce(setLd, 300)(list)
  , []); */
  useEffect(() => {
    const filtered = l.filter(i => {
      console.log("searchStr is ", searchStr);
      console.log("i to string", i.toString());
      return i.toString().includes(searchStr.toString());
    });
   
    // debounce(setLd, 300)(filtered) // problem with this is that this is created each time component re-rendered
    db(filtered)
    // console.log('deb', debouncedChangeHandler)
    // debouncedChangeHandler(filtered)
    console.log("filtered is now ", filtered)
  }, [searchStr, l, db]);
  const renderList = () => {
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
