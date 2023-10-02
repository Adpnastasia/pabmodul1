const Counter = () => {
    const [count, setCount] = React.useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        React.createElement('div', null,
            React.createElement('h2', null, `Counter: ${count}`),
            React.createElement('button', { onClick: increment }, '+1'),
            React.createElement('button', { onClick: decrement }, '-1')
        )
    );
};

ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('root')
);


