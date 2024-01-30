import './dataInputList.css'
import deleteIcon from '../assets/delete.svg'
import editIcon from '../assets/edit.svg'

function ListItemEdu({ itemData, displayArray, updateArray })
{
    return (<div className="dataListHolderItem">
        <div className="dataListHolderItemName">{itemData.inst}</div>
        <div className="dataListHolderItemEdit"><img src={editIcon} /></div>
        <div className="dataListHolderItemDelete"><img src={deleteIcon} onClick={() => {
            let filtered = displayArray.filter((item) => item.id !== itemData.id);
            updateArray(filtered);
        }} /></div>
    </div>);
}

function ListItemJob({ itemData, displayArray, updateArray })
{
    return (<div className="dataListHolderItem">
        <div className="dataListHolderItemName">{itemData.comp}</div>
        <div className="dataListHolderItemEdit"><img src={editIcon} /></div>
        <div className="dataListHolderItemDelete"><img src={deleteIcon} onClick={() => {
            let filtered = displayArray.filter((item) => item.id !== itemData.id);
            updateArray(filtered);
        }} /></div>
    </div>);
}

function DataInputList({ toDisplayArray, toArrayType, toUpdateArray })
{
    let arrayItems;
    console.log(toDisplayArray);
    if(toArrayType === 'education')
    { 
        arrayItems = toDisplayArray.map((arrayItem) => 
            <ListItemEdu key={arrayItem.id} itemData={arrayItem} displayArray={toDisplayArray} updateArray={toUpdateArray} />
        );        
    } else {
        arrayItems = toDisplayArray.map((arrayItem) => 
            <ListItemJob key={arrayItem.id} itemData={arrayItem} displayArray={toDisplayArray} updateArray={toUpdateArray} />
        );
    }

    console.log(arrayItems)

    return (<>
    <div className="dataListHolder">
        {arrayItems}
    </div>
    </>)
}

export default DataInputList