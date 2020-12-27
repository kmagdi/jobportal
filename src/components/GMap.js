import {GoogleMap,InfoWindow,Marker,useLoadScript} from "@react-google-maps/api"
import {formatRelative} from "date-fns"
const libraries=['places']
const mapContainerStyle={
    width:'50vw',
    height:'50vw'
}
const center={
    lat:46.906441,
    lng:19.689720
}
export default function GMap(){
    const {isLoaded,loadError}=useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_GOOGLE_API_KEY,
        libraries
    })
console.log('loaderror='+loadError+" -"+isLoaded)
console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    return(
        <div>{loadError? "loding map error": (!isLoaded? "loading map...":"")}
       {/* <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

    </GoogleMap>*/}
    </div>
    )
}