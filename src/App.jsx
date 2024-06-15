import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header.jsx";
import { StudentProvider } from "./context/student/StundetContext.jsx";
import NewStudentPage from "./pages/app/student/new-student-page/NewStudentPage.jsx";
import StudentListPage from "./pages/app/student/student-list-page/StudentListPage.jsx";
import LandingPage from "./pages/shared/landing-page/LandingPage.jsx";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage.jsx";
import { useCallback, useState } from "react";

function App() {
  //Sadece baş harfleri büyük yazdırma fonksiyonu
  // function capitalizeFirstLetter(input) {
  //   return input.toLowerCase().replace(/(^\w|\s\w)/g, function (letter) {
  //     return letter.toUpperCase();
  //   });
  // }
  const [num1,setNum1]=useState(0)
  const [num2,setNum2]=useState(0)
  const [sum,setSum]=useState(0)

  const calculateSum=useCallback(()=>{
    console.log("CalculateSum created");
    console.log("num1:"+num1,"num2:"+num2,"sum:"+Number(num1+num2));
  },[num1,num2])

  const handleClick=()=>{
    console.log("handleClick created");
    setSum(calculateSum())
  }
  return (
    <>
      <br />
      <label >Num1:</label>
      <input type="text" value={num1} onChange={(event)=>setNum1(Number(event.target.value))}/>
      <br />
      <label >Num1:</label>
      <input type="text" value={num2} onChange={(event)=>setNum2(Number(event.target.value))}/>
      <br /><br />
      <button onClick={handleClick}>Calculate Sum</button>
      <br />
      <p>Sum:{sum}</p>
    </>
  );
}

export default App;

{
  /* <Router>
      <div className="App">
        <Header />
        <StudentProvider>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/students" element={<StudentListPage />} />
              <Route path="/students/new" element={<NewStudentPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </StudentProvider>
      </div>
    </Router> */
}
