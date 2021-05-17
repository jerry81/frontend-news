import { useState } from 'react';

function getRand() {
    return Math.round(Math.random() * 100)
}

export default function FunctionalComponent(props) {
    const list = new Array(20).fill(0).map(getRand)
    console.log('list is ', list)
    const [l] = useState(list)
    const [ld, setLd] = useState(l.filter(_ => true))
    const [searchStr, setSearchStr] = useState('')
    const searchStrChanged = (input) => {
        setSearchStr(input.target.value)
    }
    const renderList = () => {
      return (
          ld.map((i, idx) => (
              <li key={idx}>
                {i}
              </li>
          ))
      )
    }

    return <div>
        <div>filter: 
            <input value={searchStr} onChange={searchStrChanged}/>
        </div>
        <div><span>list: </span>
          <ul>
              { renderList() }
          </ul>
        </div>
    </div>
}