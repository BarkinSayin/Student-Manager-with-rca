import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [count, setCount] = useState(5);

  //useNavigate hookunu kullanarak React Router'da gezinme işlevini yapan bir fonksiyon tanımlıyoruz
  const navigate = useNavigate();

  useEffect(() => {
    //Eğer count değerimiz 0'a eşitse sayfaya yönlendirme gerçekleşicek
    if (count === 0) {
      navigate("/");
    }
    //Her 1000 milisaniye de bu fonksiyonu çalıştırmaya yarıyor
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    //Component unmount edildiğinde mevcut zamanlayıcı iptal edilir
    return () => clearTimeout(timer);
    //useEffect hookumuz sadece count ve navigate değerlerimiz değiştiğinde çalşıcaktır
  }, [count, navigate]);

  return (
    <div className="not-found-page-container">
      <h2>Ooooops...</h2>
      <h3>Page Not Found</h3>
      <p>You will be redirected to Home page in {count} seconds</p>
    </div>
  );
};

export default NotFoundPage;
