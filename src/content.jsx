import { useState } from 'react'
import './content.css'
import PersonalData from './components/personalData'
import RenderedResult from './components/renderedResult'
import DataInput from './components/dataInput';

function Content() {
  const [name, setName] = useState('Jhon Doe');
  const [mail, setMail] = useState('example@example.es');
  const [phone, setPhone] = useState('+34123456789');
  const [address, setAddress] = useState('Madrid');
  const [education, setEducation] = useState([]);
  const [jobs, setJobs] = useState([]);

  return (
    <>
      <div className="mainContent">
        <div className='configuration'>
          <PersonalData displayName={name} setDisplayName={setName}
          displayMail={mail} setDisplayMail={setMail}
          displayPhone={phone} setDisplayPhone={setPhone}
          displayAddress={address} setDisplayAddress={setAddress} />
          <DataInput displayTitle='My Education' displayButton='Add education site' arrayType='education' displayArray={education} updateArray={setEducation} />
          <DataInput displayTitle='My Jobs' displayButton='Add job experience' arrayType='jobs' displayArray={jobs} updateArray={setJobs} />
        </div>
        <div className='result'>
          <RenderedResult displayName={name} displayMail={mail} displayPhone={phone} displayAddress={address} educationArray={education} jobsArray={jobs} />
        </div>
      </div>
    </>
  )
}

export default Content
