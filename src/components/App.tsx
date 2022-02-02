import React, { useCallback, useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, [setCount]);

  return (
    <div>
      <main className="main-container">
        <header className="app-header">
          <h1 className="app-heading">
            React application with some logic to test
          </h1>
        </header>
        <section className="counter-section">
          <div className="content-centered">
            <div className="count-indicator content-centered">{count}</div>
            <button
              className="increment-button"
              onClick={increment}
              type="button"
            >
              increment counter
            </button>
            <button
              className="increment-button"
              onClick={decrement}
              type="button"
            >
              decrement counter
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
