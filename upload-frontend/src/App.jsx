import { useState } from 'react'
import './App.css'
import avatarDefault from './img/avatar_placeholder.png'

// FILE UPLOADING
function App() {

  // store file that user picked from file dialog in state
  const [avatar, setAvatar] = useState(avatarDefault)

  const onAvatarChange = (e) => {
    const file = e.target.files[0]; // BLOB Object (Binary Large Object)

    // use file reader to convert binary file to a file string (data uri)
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    // when finished we will get result here
    fileReader.onloadend = (e) => {
      const fileDataUriString = fileReader.result
      setAvatar( fileDataUriString )
    };
  }

  // send to backend
  const onSend = async () => {
    const resp = await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "losrobbos",
        image: avatar
      })
    })

    const result = await resp.json()
    console.log(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="file" >
          <img src={ avatar } style={{ width: "100px" }} />
        </label>
        {/* <input id="txt" type="text" /> */}
        <input style={{ display: "none" }} id="file" type="file" accept="image/*" 
          // if user picked a file => store it in state 
          onChange={ onAvatarChange }
        />
        <button onClick={ onSend }>Send</button>
      </header>
    </div>
  )
}

export default App
