import GuitarIem from "./Guitar"
import type { Guitar } from "../types/index"

type MainProps = {
    data: Guitar[]
    addToCart: (item: Guitar) => void
}

export default function Main({ data, addToCart } : MainProps) {

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <GuitarIem
                        key={guitar.id}
                        guitar={guitar}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </main>
    )
}