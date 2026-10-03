function StationHeader({ stationName, location, slogan }){
    return(
        <header className="station-header">
            <h1>{stationName}</h1>
            <p>{location}, {slogan}</p>
        </header>
    );
}

export default StationHeader;