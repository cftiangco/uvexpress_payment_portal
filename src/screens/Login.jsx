import React,{useState,useEffect} from "react";
import {InputText} from '../components/InputText'
import {MyButton} from '../components/MyButton'

export const Login = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChangeUserName = (value) => {
        setUsername(value);
    }

    const handleOnChangePassword = (value) => {
        setPassword(value);
    }

    useEffect(() => {

    }, [username, password])

    return (
        <div className="flex flex-col h-screen items-center justify-center mx-3">

            <div className={'text-center text-blue-400 mb-5 font-bold text-xl'}>
                <h4>UV Express Top-up</h4>
            </div>

            <InputText
                placeholder={"Username"}
                onChange={(e) => handleOnChangeUserName(e.target.value)}
                type={'text'}
                value={username}
            />
            <br />

            <InputText
                placeholder={"Password"}
                onChange={(e) => handleOnChangePassword(e.target.value)}
                type={'password'}
                value={password}
            />

            <br />

            <MyButton
                label={'LOGIN'}
                onClick={() => onLogin(username, password)}
            />

        </div>
    )
}