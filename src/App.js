import './App.css';
import {Route, Routes} from "react-router-dom";
import IndexPage from './Page/Index/IndexPage';
import BasketPage from './Page/Basket/BasketPage';
import ContactsPage from './Page/Contacts/ContactsPage';
import InfoPage from './Page/Info/InfoPage';
import DefaultLayout from './layouts/DefaultLayout';
import LoginPage from './Page/Login/LoginPage';
import AuthPage from './Page/Auth/AuthPage';
import FeedbackPage from './Page/Feedback/FeedbackPage';


function App() {
 return (
     <div className='App'>
         <Routes>
             <Route path={'/'} element={<DefaultLayout/>}>
                 <Route index element={<IndexPage/>}></Route>
                 <Route path={'basket'} element={<BasketPage/>}></Route>
                 <Route path={'contacts'} element={<ContactsPage/>}></Route>
                 <Route path={'auth'} element={<AuthPage/>}></Route>
                 <Route path={'login'} element={<LoginPage/>}></Route>
                 <Route path={'feed'} element={<FeedbackPage/>}></Route>
                 <Route path={'info/:name'} element={<InfoPage/>}>
                 </Route>
             </Route>
         </Routes>
     </div>
 )
}

export default App;
