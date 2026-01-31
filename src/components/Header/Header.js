function Header({firstName, lastName, jobTitle}){
    return (
        <div id="header">
            <div id="name">
                <span className="lastName">{firstName}</span><span>{lastName}</span>
            </div>
            <div className="jobTitle">{jobTitle}</div>
            <hr />
        </div>
    );
}

export default Header;