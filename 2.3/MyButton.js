function MyButton(props) {
	const [isClicked, setIsClicked] = React.useState(false);

	return React.createElement(
		'button',
		{ onClick: () => setIsclicked(true) },
		isClicked ? 'Clicked!' : 'Click here!'
	)
}

// ReactDOM의 createRoot 함수를 사용해 root DOM node를 만들고, 이를 활용하여 리액트 컴포넌트를 DOM 컨테이너에 렌더링하는 코드
const domContainer = document.querysSelector('#root');
const root = ReactDOM.creatRoot(domContainer);
root.render(React.createElement(MyButton));