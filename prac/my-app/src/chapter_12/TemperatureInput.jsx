const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {
    // 온도 값이 변경되었을 때, props의 onTemperatureChange() 함수를 호출하여 상위 컴포넌트로 변경된 값을 전달하게 됨
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해 주세요(단위:{scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;