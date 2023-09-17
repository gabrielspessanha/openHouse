import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Register } from "./components/Register"
import { RegisterUser } from "./components/RegisterUser"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <div className="background-main">
      <Header />
        <Register />
      <GlobalStyle />
    </div>
  )
}

export default App
