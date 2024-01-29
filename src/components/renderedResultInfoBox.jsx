import './renderedResultInfoBox.css'

function RenderedResultInfoBox({ infoName, infoImage }) {
    return (
        <>
            <div className="resultHeaderBoxExtraItem">
                <div className="resultHeaderBoxExtraItemImage">
                    <img src={infoImage} />
                </div>
                <div className="resultHeaderBoxExtraItemText">
                    <p>{infoName}</p>
                </div>
            </div>
        </>)

}

export default RenderedResultInfoBox