import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header.jsx";
import { StudentProvider } from "./context/student/StundetContext.jsx";
import LandingPage from "./pages/shared/landing-page/LandingPage.jsx";
import StudentListPage from "./pages/app/student/student-list-page/StudentListPage.jsx";
import NewStudentPage from "./pages/app/student/new-student-page/NewStudentPage.jsx";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage.jsx";

function App() {
  //Sadece baş harfleri büyük yazdırma fonksiyonu
  // function capitalizeFirstLetter(input) {
  //   return input.toLowerCase().replace(/(^\w|\s\w)/g, function (letter) {
  //     return letter.toUpperCase();
  //   });
  // }

  return (
    <Router>
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
    </Router>
  );
}

export default App;
