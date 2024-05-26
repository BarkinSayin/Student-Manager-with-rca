import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [count, setCount] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/");
    }
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  return (
    <div className="not-found-page-container">
      <h2>Ooooops...</h2>
      <h3>Page Not Found</h3>
      <p>You will be redirected to Home page in {count} seconds</p>
    </div>
  );
};

export default NotFoundPage;
