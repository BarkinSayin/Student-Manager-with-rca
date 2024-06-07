import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/shared/Header.jsx";
import { StudentProvider } from "./context/student/StundetContext.jsx";
import NewStudentPage from "./pages/app/student/new-student-page/NewStudentPage.jsx";
import StudentListPage from "./pages/app/student/student-list-page/StudentListPage.jsx";
import LandingPage from "./pages/shared/landing-page/LandingPage.jsx";
import NotFoundPage from "./pages/shared/not-found-page/NotFoundPage.jsx";
import { createRef, useReducer } from "react";

const initialState = {
  counter: 0,
  lastUpdatedAt: new Date().toLocaleString(),
  errors: {
    incrementError: false,
    decrementError: false,
    setCounterError: false,
  },
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return {
        ...state,
        counter: state.counter + 1,
        lastUpdatedAt: new Date().toLocaleString(),
      };
    case "DECREMENT_BY_ONE":
      return {
        ...state,
        counter: state.counter - 1,
        lastUpdatedAt: new Date().toLocaleString(),
      };
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        errors: { ...state.errors, incrementError: false },
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        errors: { ...state.errors, decrementError: false },
      };
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.payload.amount,
        lastUpdatedAt: new Date().toLocaleString(),
        errors: { ...state.errors, setCounterError: false },
      };
    case "RESET":
      return {
        ...state,
        counter: 0,
        lastUpdatedAt: new Date().toLocaleString(),
        errors: {
          incrementError: false,
          decrementError: false,
          setCounterError: false,
        },
      };
    case "ERROR":
      return { ...state, errors: action.payload.errors };
    default:
      return state;
  }
};

function App() {
  //Sadece baş harfleri büyük yazdırma fonksiyonu
  // function capitalizeFirstLetter(input) {
  //   return input.toLowerCase().replace(/(^\w|\s\w)/g, function (letter) {
  //     return letter.toUpperCase();
  //   });
  // }
  const [state, dispatch] = useReducer(reducer, initialState);
  const incbyRef = createRef();
  const decbyRef = createRef();
  const setCounterRef = createRef();

  const handleIncrement = () => {
    if (Number(incbyRef.current.value)) {
      dispatch({
        type: "INCREMENT",
        payload: { amount: Number(incbyRef.current.value) },
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: { errors: { ...state.errors, incrementError: true } },
      });
    }
  };

  const handleDecrement = () => {
    if (Number(decbyRef.current.value)) {
      dispatch({
        type: "DECREMENT",
        payload: { amount: Number(decbyRef.current.value) },
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: { errors: { ...state.errors, decrementError: true } },
      });
    }
  };

  const handleSetCounter = () => {
    if (Number(setCounterRef.current.value)) {
      dispatch({
        type: "SET_COUNTER",
        payload: { amount: Number(setCounterRef.current.value) },
      });
    } else {
      dispatch({
        type: "ERROR",
        payload: { errors: { ...state.errors, setCounterError: true } },
      });
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    incbyRef.current.value = null;
    decbyRef.current.value = null;
    setCounterRef.current.value = null;
  };

  return (
    <>
      <p>Count:{state.counter}</p>
      <p>LastUpdate:{state.lastUpdatedAt}</p>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_ONE" })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT_BY_ONE" })}>
        Decrease
      </button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <button onClick={handleIncrement}>Inc by</button>
      <input type="text" ref={incbyRef} />
      {state.errors.incrementError && <p>Invalid Number</p>}
      <br />
      <button onClick={handleDecrement}>Dec by</button>
      <input type="text" ref={decbyRef} />
      {state.errors.decrementError && <p>Invalid Number</p>}
      <br />
      <button onClick={handleSetCounter}>Set Counter</button>
      <input type="text" ref={setCounterRef} />
      {state.errors.setCounterError && <p>Invalid Number</p>}
    </>
  );
}

export default App;

// (
//   <Router>
//     <div className="App">
//       <Header />
//       <StudentProvider>
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/students" element={<StudentListPage />} />
//             <Route path="/students/new" element={<NewStudentPage />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </main>
//       </StudentProvider>
//     </div>
//   </Router>
// );
