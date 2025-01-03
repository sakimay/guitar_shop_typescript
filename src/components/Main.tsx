import GuitarItem from "./Guitar"
import type { Guitar } from "../types/index"
import { Dispatch } from "react"
import type { CartActions } from "../reducers/cart-reducer"

type MainProps = {
    data: Guitar[]
    dispatch: Dispatch<CartActions>
}

export default function Main({ data, dispatch } : MainProps) {

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <GuitarItem
                        key={guitar.id}
                        guitar={guitar}
                        dispatch={dispatch}
                    />
                ))}
            </div>
        </main>
    )
}