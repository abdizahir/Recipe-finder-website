import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

function Error() {
    const error = useRouteError();
    console.log(error.data);
    console.log(error);

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if(error.status === 500) {
        message = error.data.message;
    }
    if(error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }
    return (
        <>  
            <Header />
            <div className="text-center mt-8">
                <h1 className="my-3 text-preset2_mobile font-bold">{title}</h1>
                <p className="my-3 text-preset5">{message}</p>
            </div>
        </>
    );
}

export default Error;