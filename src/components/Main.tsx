import Guitar from "./Guitar"

export default function Main({ data, addToCart }) {

    return (
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitar
                        key={guitar.id}
                        guitar={guitar}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </main>
    )
}