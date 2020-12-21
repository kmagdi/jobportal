import {Link} from "react-router-dom"
export const NotFound=()=>{
    return(
        <div>
            <h1> ...ez az oldal nem található...</h1>
            <Link to="/">vissza ...</Link>
        </div>
    )
}