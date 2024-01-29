import { useState } from 'react'
import './content.css'
import PersonalData from './components/personalData'
import RenderedResult from './components/renderedResult'

function Content() {
  const [name, setName] = useState('Jhon Doe');
  const [mail, setMail] = useState('example@example.es');
  const [phone, setPhone] = useState('+34123456789');
  const [address, setAddress] = useState('Madrid');

  return (
    <>
      <div className="mainContent">
        <div className='configuration'>
          <PersonalData displayName={name} setDisplayName={setName}
          displayMail={mail} setDisplayMail={setMail}
          displayPhone={phone} setDisplayPhone={setPhone}
          displayAddress={address} setDisplayAddress={setAddress} />
        </div>
        <div className='result'>
          <RenderedResult displayName={name} displayMail={mail} displayPhone={phone} displayAddress={address} />
        </div>
      </div>
    </>
  )
}

export default Content
