import React, { useState } from 'react';
import UploadForm from './components/UploadForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>TP IGL</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
      <UploadForm />
    </>
  );
}

export default App;
