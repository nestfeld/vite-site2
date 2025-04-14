import bg from "./bg.jpg";
import LoginLogo from "./authPageLogo.svg";
import "./Auth.css";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from "../../config/firebase-config";  // Предполагается, что вы настроили Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const wrapperStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100vh',
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      navigate('/profile')
    }
  }, [navigate])

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);

      // Перенаправление после успешного входа
      navigate("/profile"); // Перенаправление на страницу после входа
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper" style={wrapperStyle}>
      <section className="auth-form">
        <h1 className="auth-from--title">Вход</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Почта"
            className="auth-form--input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            className="auth-form--input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: "red" }}>Ошибка! Неверный логин или пароль</p>} {/* Вывод ошибки, если она есть */}
          <button type="submit" className="auth-btn">
            <p className="auth-btn--text">Войти</p>
          </button>
        </form>

        <p className="registration-link">
          Нет аккаунта? <br />
          <Link to="/register/student">
            <span>Зарегистрироваться</span>
          </Link>
        </p>

        <Link to="/" className="logo-link">
          <img src={LoginLogo} alt="Язык.учи" />
          <span className="authPage--logo-text">Язык.учи</span>
        </Link>
      </section>
    </div>
  );
};

export default LoginPage;
