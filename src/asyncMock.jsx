const products = [
    {
        id: '1',
        name: 'Las Mil y Una Noches',
        price: 20000,
        category: 'Libro',
        img: 'https://pictures.abebooks.com/isbn/9786071411716-us.jpg',
        stock: 20,
        description: 'Descripción del libro'
    },
    { id: '2', name: 'Harry Potter y la Piedra Filosofal', price: 800, category: 'libro', img:  'https://static.wikia.nocookie.net/esharrypotter/images/9/9a/Harry_Potter_y_la_Piedra_Filosofal_Portada_Espa%C3%B1ol.PNG/revision/latest/scale-to-width-down/1200?cb=20151020165725' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(producto)
        }, 200)
    })
}