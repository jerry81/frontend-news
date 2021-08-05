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
  function handleClick() {
    console.log('clicked', this)
  }

  const db = useMemo(
    () => { 
        return debounce(setLd, 300)
    },
    []    
  )
  useEffect(() => {
    const filtered = l.filter(i => {
      return i.toString().includes(searchStr.toString());
    });
   
    // debounce(setLd, 300)(filtered) // problem with this is that this is created each time component re-rendered
    db(filtered)
  }, [searchStr, l, db]);
  const renderList = () => {
    return ld.map((i, idx) => <li onClick={handleClick.bind(idx)} key={idx}>{i}</li>);
  };

  function handleSpan () {
    console.log('span')
  }

  function adhoc(idx) {
    console.log('adhoc', idx)
  }

  return (
    <div style={{ margin: "10px" }}>
      <div>
        filter:
        <input value={searchStr} onChange={searchStrChanged} />
      </div>
      <div>
        <span onClick={handleSpan}>list: </span>
        <ul>{renderList()}</ul>
        <ul>
          {[1,2,5,8].map((i, idx) => (<li key={idx} onClick={adhoc.bind(null, idx)}>{i}</li>))}
        </ul>
      </div>
    </div>
  );
}
