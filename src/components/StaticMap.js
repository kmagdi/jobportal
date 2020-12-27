import  "./StaticMap.css"
export const StaticMap=()=>{
    return(
        <div className="mapContainer">
            <div  className="map">
                <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1Zp9XpzpX49srnKmolSXml-WoHgXa1iIW"  width="100%" height="300px"></iframe>
            </div>
        </div>
    )
}