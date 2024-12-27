import { useRouteError } from "react-router-dom";
const Error = () => { 
    const err =  useRouteError()
    console.log(err)
    return(
     <div>
        <h1>Error Page</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <h3> {err.status}: {err.statusText}</h3>
       
     </div>
    )
}
export default Error;