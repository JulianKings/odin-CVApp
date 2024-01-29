import './renderedResult.css'
import mailImage from '../assets/mail.svg';
import addressImage from '../assets/home.svg';
import phoneImage from '../assets/phone.svg';
import RenderedResultInfoBox from './renderedResultInfoBox';

function RenderedResult({ displayName, displayMail, displayPhone, displayAddress }) {
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
            </div>
        </>)

}

export default RenderedResult