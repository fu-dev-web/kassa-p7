import { Outlet } from "react-router-dom";
// import { getContacts } from "../contacts";
// Outlet, Link, useLoaderData, Form, 
import Header from "../components/Header";
// import Home from "../components/Home"
import Footer from "../components/footer";


// export async function loader(){
//   const contacts = await getContacts();
//   return { contacts };
// }


export default function Root() {
    // const { contacts } = useLoaderData();
    return (
      <div className="App">
        
        
          <Header />
          {/* <div> */}

          <Outlet />
          {/* </div> */}
        
        
          <Footer />
        
        
        
      </div>
      
    );
  }

