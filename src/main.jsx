import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Game from './Components/Game'
import 'whatwg-fetch';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
