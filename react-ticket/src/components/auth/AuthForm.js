import React, { Component } from 'react';

//import classnames from 'classnames'; //유효성검사
const AuthForm = ({id, pw, onChange, onClick}) => {
    return (
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    value={id}
                    onChange={onChange}
                    name="id"
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={pw}
                    onChange={onChange}
                    name="pw"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={onClick}>
                        로그인
                    </button>
                </div>
            </div>
    )
}

export default AuthForm;