import bg from "./bg.jpg";
import LoginLogo from "./authPageLogo.svg";
import { auth, db } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./Auth.css";
import groups from "../data/groups";
import { useParams } from "react-router-dom";


const RegisterPage = () => {

  const wrapperStyle = {
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      width: '100%',
      height: '100vh',
  }

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { type } = useParams();

  const status = (type == "student") ? "Студент" : 
    (type == "teacher") ? "Преподаватель" : "unknown";

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null)

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstname,
        lastname,
        email,
        status,
        group,
        createdAt: new Date(),
      });

      console.log("User registred:", user);
      navigate("/profile")
    } catch (err) {
      setError(err.message);
    }
  }


  return (
    <>
      <div className="login-wrapper" style={wrapperStyle}>
        <section className="auth-form">
          <h2 className='auth-from--title'>Регистрация</h2>
          {error && <p style={{color: "red"}}>{error}</p>}

          <form onSubmit={handleRegister}>
            <input 
              type="email" 
              placeholder='Почта' 
              className='auth-form--input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder='Имя' 
              className='auth-form--input'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <input 
              type="text" 
              placeholder='Фамилия' 
              className='auth-form--input'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            { type == "student" ? (
              <select 
                id="group" 
                className='auth-form--input' 
                value={group} 
                onChange={(e) => {
                  setGroup(e.target.value);
                }}
                required
              >
                <option value="" disabled>Выберите группу</option>
                {groups.map((group, index) => (
                  <option value={group} key={index}>{group}</option>
                ))}
              </select>
            ) : (
              ''
            )}
            <input 
              type="text" 
              placeholder='Пароль' 
              className='auth-form--input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className='registration-link'>
              Есть аккаунта? <br/> 
              <Link to="/login"><span>Войти</span></Link>
            </p>
            <button className='auth-btn' type="submit">
              <p className='auth-btn--text'>Создать</p>
            </button>
          </form>
          <Link to="/" className='logo-link'>
            <img src={LoginLogo} alt="Язык.учи" />
            <span className='authPage--logo-text'>Язык.учи</span>
          </Link>
        </section>
      </div>
    </>
  )
}

export default RegisterPage