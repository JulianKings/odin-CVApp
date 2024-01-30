import { useState } from 'react'

import './dataInput.css'
import { getNextEducationId, getNextJobId } from '../scripts/dataManager';
import DataInputList from './dataInputList';


function DataInput({ displayTitle, displayButton, arrayType, displayArray, updateArray })
{
    const [modifyStatus, setModifyStatus] = useState(false);
    let content = (<>
        <DataInputList toArrayType={arrayType} toDisplayArray={displayArray} toUpdateArray={updateArray} />
            <button className='dataInputButton' onClick={() => { setModifyStatus(true) }}>{displayButton}</button>
        </>);

    if(modifyStatus)
    {
        if(arrayType === 'education')
        {
            content = (<>
            <div className="contentBoxForm">
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution" name="user_institution" />
            </div>
            <div className="contentBoxForm">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" name="user_degree" required />
            </div>
            <div className="contentBoxForm">
                <label htmlFor="start">Start Date</label>
                <input type="date" id="start" name="user_start" required />
            </div>
            <div className="contentBoxForm">
                <label htmlFor="end">End Date</label>
                <input type="date" id="end" name="user_end" required />
            </div>
                <div className='dataInputButtonsBox'>
                    <button className='dataInputButton' onClick={() => { 
                        let institution = document.querySelector('#institution');
                        let degree = document.querySelector('#degree');
                        let endDate = document.querySelector('#end');
                        let startDate = document.querySelector('#start');
                        let educationItem = { 
                            id: getNextEducationId(),
                            inst: ((institution.value==="") ? 'None' : institution.value),
                            deg: ((degree.value==="") ? 'None' : degree.value),
                            start: ((startDate.value==="") ? 'None' : startDate.value),
                            end: ((endDate.value==="") ? 'None' : endDate.value)
                        }
                        updateArray(displayArray.concat([educationItem]));
                        setModifyStatus(false);
                         }}>Save</button>
                    <button className='dataInputButton' onClick={() => { setModifyStatus(false) }}>Cancel</button>
                </div>
            </>);
        } else {
            content = (<>
                <div className="contentBoxForm">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="user_company" />
                </div>
                <div className="contentBoxForm">
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position" name="user_position" required />
                </div>
                <div className="contentBoxForm">
                    <label htmlFor="start">Start Date</label>
                    <input type="date" id="start" name="user_start" required />
                </div>
                <div className="contentBoxForm">
                    <label htmlFor="end">End Date</label>
                    <input type="date" id="end" name="user_end" required />
                </div>
                    <div className='dataInputButtonsBox'>
                        <button className='dataInputButton' onClick={() => { 
                            let company = document.querySelector('#company');
                            let position = document.querySelector('#position');
                            let endDate = document.querySelector('#end');
                            let startDate = document.querySelector('#start');
                            let jobItem = { 
                                id: getNextJobId(),
                                comp: ((company.value==="") ? 'None' : company.value),
                                pos: ((position.value==="") ? 'None' : position.value),
                                start: ((startDate.value==="") ? 'None' : startDate.value),
                                end: ((endDate.value==="") ? 'None' : endDate.value)
                            }
                            updateArray(displayArray.concat([jobItem]));
                            setModifyStatus(false)
                             }}>Save</button>
                        <button className='dataInputButton' onClick={() => { setModifyStatus(false) }}>Cancel</button>
                    </div>
                </>);
        }
    }


    return (
    <>
        <div className="contentBox">
            <p className="contentTitle">{displayTitle}</p>
            {content}
        </div>
    </>)

}

export default DataInput