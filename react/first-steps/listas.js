const products = [
    { title: 'Repolho', id: 1, isFruit: false },
    { title: 'Alho', id: 2, isFruit: false },
    { title: 'Maçâ', id: 3, isFruit: true }
]

export default function ShoppingList() {
    const listItems = products.map((product) =>
        <li key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}>
            {product.title}
        </li>
    )

    return (
        <ul>{listItems}</ul>
    )
}

// Todo item de uma lista deve ter uma key para o React entender quando houver mudança