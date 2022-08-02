import { Routes, Route } from 'react-router-dom';
import './App.css';
import CounterOne from './Hooks/CounterOne';
import CounterTwo from './Hooks/CounterTwo';
import DocTitle from './Hooks/DocTitle';
import DocTitleTwo from './Hooks/DocTitleTwo';
import UserForm from './Hooks/UserForm';
import Count from './React-Hooks/count';
import DataFetching from './React-Hooks/DataFetching';
import DataFetching1 from './React-Hooks/DataFetching1';
import FocusInput from './React-Hooks/FocusInput';
import HookCounter from './React-Hooks/HookCounter';
import HookCounterFive from './React-Hooks/HookCounterFive';
import HookCounterFour from './React-Hooks/HookCounterFour';
import HookCounterThree from './React-Hooks/HookCounterThree';
import HookCounterTwo from './React-Hooks/HookCounterTwo';
import About from './ReactRouter/About'
import { Navbar } from './ReactRouter/Navbar';
import First from './Component-Html/First';
import { OrderSummary } from './ReactRouter/OrderSummary';
import { Home1 } from './ReactRouter/Home1';
import { Product } from './ReactRouter/Product';
import { New } from './ReactRouter/New';
import { Feature } from './ReactRouter/Feature';
import DataFetching11 from './React-Hooks/DataFetching11';
import DataTestApi from './React-Hooks/DataTestApi';
import Data from './React-Hooks/Data';
import FirstApi from './Api.js/FirstApi';
import SecondApi from './Api.js/SecondApi';
import ThirdApi from './Api.js/ThirdApi';
import PostApi from './Api.js/PostApi';
import PostApi1 from './Api.js/PostApi1';
import MuiTypography from './Material-Ui/MuiTypography';
import MUiButton from './Material-Ui/MUiButton';
import { MuiTextField } from './Material-Ui/MuiTextField';
import { MuiSelect } from './Material-Ui/MuiSelect';
import { MuiRadioButton } from './Material-Ui/MuiRadioButton';
import { MuiSwitch } from './Material-Ui/MuiSwitch';
import { MuiAutocomplete } from './Material-Ui/MuiAutocomplete';
import { MuiApp } from './Material-Ui/MuiApp';
import { MuiToolBar } from './Material-Ui/MuiToolBar';
import { ProjectMui } from './Material-Ui/ProjectMui';
import { HomeMui } from './Material-Ui/HomeMui';
import { Header1 } from './Material-Ui/Header1';
import { Header2 } from './Material-Ui/Header2';
import { Google, Home } from '@mui/icons-material';
import { Google1 } from './Material-Ui/Google1';
import { Google2 } from './Material-Ui/Google2';

function App() {
  return (
    <div className="App">
    {/* <Count />
       <HookCounter />
      <HookCounterTwo /> 
      <HookCounterThree />
      <HookCounterFour />
      <HookCounterFive />
      <DataFetching />
      <DataFetching1 />
      <FocusInput />
      <DocTitle />
    <DocTitleTwo />
      */}

 {/*  <CounterOne />
    <CounterTwo />
    <useCounter />
    
    <UserForm />
    <useInput />*/} 
    <>
    {/* <Navbar /> */}
    <Routes>
      {/* <Route path='/' element= {< Home1 /> }  /> */}
      <Route path ="about" element = {<About />} />
      <Route path='develop' element ={<First />} />
      <Route path='order-summary' element = {<OrderSummary />}/>
      <Route path='dataFetching' element ={<DataFetching />} />
      <Route path='dataFetching-1' element ={<DataFetching11 />} />
      <Route path='product' element ={<Product /> } >
      <Route path='new' element ={<New />} />
      <Route path='feature' element ={<Feature /> } />
      </Route>
      <Route path='data' element ={<Data />} />
      <Route path='DataTestApi' element ={<DataTestApi />} /> 
      <Route path='firstApi' element ={<FirstApi />} />
      <Route path='secondApi' element ={<SecondApi />} />
      <Route path='thirdApi' element ={<ThirdApi />} />
      <Route path='postApi' element={<PostApi />} />
      <Route path='postApi-1' element ={<PostApi1 />} />
      <Route path ='Home' element ={<Home />} />
      
    </Routes> 
    </>
  
  {/* Material -UI  */}
  
    {/* <MuiTypography />
    <MUiButton />
    <MuiTextField /> 
    <MuiSelect /> 
    <MuiRadioButton /> */}
    {/* <MuiSwitch /> */}
    {/* <MuiAutocomplete /> */}
    {/* <MuiApp /> */}
    {/* <MuiToolBar /> */}
    {/* <ProjectMui /> */}
    {/* <HomeMui /> */}
    {/* <Header1 />
    <Header2 /> */}
     
    <Google1 />
    {/* <Google2 /> */}

  </div>
  );
  
  
}

export default App;
