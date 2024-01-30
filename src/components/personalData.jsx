function PersonalData({ displayName, setDisplayName, displayMail, setDisplayMail, displayPhone, setDisplayPhone, displayAddress, setDisplayAddress })
{
    return (
    <>
        <div className="contentBox">
            <p className="contentTitle">About me</p>
            <div className="contentBoxForm">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="user_name" minLength="3" required value={displayName}
                onChange={(e) => { setDisplayName(e.target.value) }} />
            </div>
            <div className="contentBoxForm">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_mail" required value={displayMail}
                onChange={(e) => { setDisplayMail(e.target.value) }} />
            </div>
            <div className="contentBoxForm">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="user_phone" required value={displayPhone}
                onChange={(e) => { setDisplayPhone(e.target.value) }} />
            </div>
            <div className="contentBoxForm">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="user_address" required value={displayAddress}
                onChange={(e) => { setDisplayAddress(e.target.value) }} />
            </div>
        </div>
    </>)

}

export default PersonalData