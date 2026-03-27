import { useState } from 'react'
import KULogo from './assets/KU-Logo.png'
import './App.css'

function App() {
  const [showTeam, setShowTeam] = useState(false)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={KULogo} className="base" width="170" height="179" alt="" />
        </div>

        <div>
          <h1>I love DevOps 💙</h1>
          <p>
            <strong>
              This web app written by Mrs. Nichakarn, Thanyanee, Pavitchaya, Sasitorn.
            </strong>
          </p>
        </div>

        {/* 🔥 ปุ่ม */}
        <button
          className="counter"
          onClick={() => setShowTeam(!showTeam)}
        >
          👨‍💻 Our Team
        </button>

        {/* 🔥 ส่วนที่ขาด = แสดงรายชื่อ */}
        {showTeam && (
          <div>
            <p>👩‍💻 Team Members:</p>
            <ul>
              <li>Mrs.Nichakarn Chinwong 6630202210</li>
              <li>Mrs.Thanyanee Aimchit 6630202350</li>
              <li>Mrs.Pavitchaya Phoonsap 6630202481</li>
              <li>Mrs.Sasitorn Nueangjumnong 6630202708</li>
            </ul>
          </div>
        )}

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App