import './renderedResult.css'
import mailImage from '../assets/mail.svg';
import addressImage from '../assets/home.svg';
import phoneImage from '../assets/phone.svg';
import RenderedResultInfoBox from './renderedResultInfoBox';

function ListItemEdu({ itemData })
{
    return (<div className="resultEducationBoxListItem">
        <div className="resultEducationBoxListItemInstitution"><strong>Institution:</strong> {itemData.inst}</div>
        <div className="resultEducationBoxListItemDegree"><strong>Degree:</strong> {itemData.deg}</div>
        <div className="resultJobBoxListItemDate"><strong>{((itemData.start==='') ? '' : 'Started: ')}</strong>
        {((itemData.start==='') ? '' : itemData.start)}
        {((itemData.start !=='' && itemData.end !== '') ? ', ' : '')}
        <strong>{((itemData.end==='') ? '' : 'Ended: ')}</strong>
        {((itemData.end==='') ? '' : itemData.end)}</div>
    </div>);
}

function ListItemJob({ itemData })
{
    return (<div className="resultJobBoxListItem">
        <div className="resultJobBoxListItemCompany"><strong>Company:</strong> {itemData.comp}</div>
        <div className="resultJobBoxListItemPosition"><strong>Position:</strong> {itemData.pos}</div>
        <div className="resultJobBoxListItemDescription"><strong>Job Description:</strong> {itemData.desc}</div>
        <div className="resultJobBoxListItemDate"><strong>{((itemData.start==='') ? '' : 'Started: ')}</strong>
        {((itemData.start==='') ? '' : itemData.start)}
        {((itemData.start !=='' && itemData.end !== '') ? ', ' : '')}
        <strong>{((itemData.end==='') ? '' : 'Ended: ')}</strong>
        {((itemData.end==='') ? '' : itemData.end)}</div>
    </div>);
}

function RenderedResult({ displayName, displayMail, displayPhone, displayAddress, educationArray, jobsArray }) {
    let educationContent = '';
    let jobsContent = '';

    if(educationArray.length > 0)
    {
        let arrayItems = educationArray.map((arrayItem) => 
            <ListItemEdu key={arrayItem.id} itemData={arrayItem} />
        ); 
        educationContent = (<div className='resultEducationBox'>
            <div className='resultEducationBoxTitle'>Education</div>
            <div className='resultEducationBoxList'>
                {arrayItems}
            </div>
        </div>);
    }

    if(jobsArray.length > 0)
    {
        let arrayItems = jobsArray.map((arrayItem) => 
            <ListItemJob key={arrayItem.id} itemData={arrayItem} />
        ); 
        jobsContent = (<div className='resultJobsBox'>
            <div className='resultJobsBoxTitle'>Jobs</div>
            <div className='resultJobBoxList'>
                {arrayItems}
            </div>
        </div>);
    }
    
    return (
        <>
            <div className="resultBox">
                <div className="resultHeaderBox">
                    <p>{displayName}</p>
                    <div className='resultHeaderBoxExtra'>
                        <RenderedResultInfoBox infoImage={mailImage} infoName={displayMail} />
                        <RenderedResultInfoBox infoImage={phoneImage} infoName={displayPhone} />
                        <RenderedResultInfoBox infoImage={addressImage} infoName={displayAddress} />
                    </div>
                </div>
                {educationContent}
                {jobsContent}
            </div>
        </>)

}

export default RenderedResult