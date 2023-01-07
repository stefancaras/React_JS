import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Counter from './components/Counter'

ReactDOMClient.createRoot(document.querySelector("#root")).render(<Counter />)
