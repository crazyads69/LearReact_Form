import { ContactPage } from './ContactPage';
import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ThankYouPage } from './ThankYouPage';

const Router = createBrowserRouter([
    { path: '/', element: <Navigate to="contact" /> },
    { path: 'contact', element: <ContactPage /> },
    { path: '/thank-you/:name', element: <ThankYouPage /> },
]);

function App() {
    return <RouterProvider router={Router} />;
}

export default App;
