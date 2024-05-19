import React, { useState } from "react";
import Toolbar from "./Toolbar";

// Toolbar 컴포넌트를 사용하는 LandingPage 컴포넌트
function LandingPage(props) {
    // useState 훅을 사용해서 사용자 로그인 여부 상태 관리
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {/* 상태값을 Toolbar 자식 컴포넌트한테 넘겨줌 */}
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;