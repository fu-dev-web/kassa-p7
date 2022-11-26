import { Link, useRouteError } from "react-router-dom";
import Header from "./components/Header";


export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <Header />
            <h1 className="response-status-code">404</h1>
            <p className="error-message">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to={'/'}>
                <p className="return-home">Retourner sur la page d'accueil</p>
            </Link>
            
            
        
        </div>
    )

}