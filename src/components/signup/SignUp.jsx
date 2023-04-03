import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
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

    return (
        <div>
            <h1>ユーザ登録</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={(event) => handleChangeEmail(event)}
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={(event) => handleChangePassword(event)}
                    />
                </div>
                <div>
                    <label>ユーザー名</label>
                    <input
                        name="username"
                        type="text"
                        placeholder="ユーザー名"
                        onChange={(event) => handleChangeUsername(event)}
                    />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </div>
    );
};

