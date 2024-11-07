import { BrowserRouter, createBrowserRouter, RouterProvider, Routes,Route, Navigate} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {store} from './store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
)
