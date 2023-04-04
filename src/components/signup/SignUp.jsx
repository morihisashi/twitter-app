import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigation = useNavigate();
    const auth = getAuth();
    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password, username)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: username
                });
                navigation("/");
            }).catch(() => {
                alert('メールアドレスかパスワードが入力されていません。');
            });
    };
    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    };
    const handleChangeUsername = (event) => {
        setUsername(event.currentTarget.value);
    };
    const handleLogin = () => {
        navigation("/login");
    }

    return (
        <div className="signup">
            <h1>ユーザ登録</h1>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label>メールアドレス：</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={(event) => handleChangeEmail(event)}
                    />
                </div>
                <div className="password">
                    <label>パスワード：</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={(event) => handleChangePassword(event)}
                    />
                </div>
                <div className="user">
                    <label>ユーザー名：</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="ユーザー名"
                        onChange={(event) => handleChangeUsername(event)}
                    />
                </div>
                <div>
                    <Button type="submit" variant="outlined" className="register__btn">登録</Button>
                </div>
            </form>
            <div>
                <Button variant="outlined" className="login__btn" onClick={handleLogin}>戻る</Button>
            </div>
        </div>
    );
};

