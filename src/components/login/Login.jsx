import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Button } from '@mui/material';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigation = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in
                // const user = userCredential.user;
                // console.log(user.displayName);
                navigation("/");
            })
            .catch(() => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                alert('メールアドレスかパスワードが違います');
            });
    };
    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.currentTarget.value);
    };

    return (
        <div className="login">
            <h1>Twitter Cloneにログイン</h1>
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
                <div>
                    <Button type="submit" variant="outlined" className="login__btn">ログイン</Button>
                </div>
            </form>
        </div>
    );
}
