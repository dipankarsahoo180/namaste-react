import Header from "./Header"
import {useRouteError} from 'react-router-dom'; 

const Error = () => {
    const error = useRouteError()
    return (
        <>
            <Header></Header>
            <h1>Opps!! {error?.status} {error.statusText}</h1>
            <h1>{error?.error?.message}</h1>
        </>
    )
}
export default Error;