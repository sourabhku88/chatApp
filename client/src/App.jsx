import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'

const App = () => {
  const [useName, setUserName] = useState('');
  function askName() {
    return prompt('Please Enter You name 🤗')
  }
  // function name() {
  //   let usename = askName();
  //   if (usename.length < 3) {
  //     name()
  //   } else {
  //     setUserName(useName);
  //     return usename;
  //   }
  // }
  // name()
  useEffect(() => {
    // setUserName(askName());
  }, [])
  return (
    <div>
      {/* <NavBar /> */}
      <Card name={useName} />
    </div>
  )
}

export default App