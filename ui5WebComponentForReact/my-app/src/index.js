import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MyApp } from './MyApp';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <MyApp/>
  </ThemeProvider>
);
reportWebVitals();
