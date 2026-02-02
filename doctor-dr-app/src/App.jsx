import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import GlobalStyles from './styles/GlobalStyle';
import AppLayout from './ui/AppLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <GlobalStyles />
     <AppLayout/>
    </>
  )
}

export default App
