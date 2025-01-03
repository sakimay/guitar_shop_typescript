import { useReducer , useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { cartReducer, initialState } from "./reducers/cart-reducer.ts"

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <>
      <Header
        cart={state.cart}
        dispatch={dispatch}
      />
      <Main
        data={state.data}
        dispatch={dispatch}
      />
      <Footer />
    </>
  )
}

export default App
