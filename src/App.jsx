import "./App.css";
import Header from "./components/shared/Header.jsx";
import StudentListTable from "./components/app/student/student-list-table/StudentListTable.jsx";
import StudentForm from "./components/app/student/student-form/StudentForm.jsx";
import { StudentProvider } from "./context/student/StundetContext.jsx";

function App() {
  //Sadece baş harfleri büyük yazdırma fonksiyonu
  // function capitalizeFirstLetter(input) {
  //   return input.toLowerCase().replace(/(^\w|\s\w)/g, function (letter) {
  //     return letter.toUpperCase();
  //   });
  // }

  return (
    <div className="App">
      <Header
        title={"Student Manager"}
        navElements={["Home", "About", "Contact"]}
      />
      <StudentProvider>
        <main className="main-content">
          <StudentForm />
          <StudentListTable />
        </main>
      </StudentProvider>
    </div>
  );
}

export default App;
