import React, { useState } from "react";

// useCounter() 훅은 초기 카운트 값을 파라미터로 받아서 count라는 이름의 state를 생성하여 값 제공
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;