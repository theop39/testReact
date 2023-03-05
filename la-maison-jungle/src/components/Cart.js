import './../css/Cart.css'

function Cart() {
    const articles = [
        {
            nom: "monstera",
            prix: 8
        },
        {
            nom: "lierre",
            prix: 10
        },
        {
            nom: "bouquet de fleurs",
            prix: 15
        }
    ]

    return  <div className="ljm-cart">
                <ul>
                    <li>{articles[0].nom} prix : {articles[0].prix}€</li>
                    <li>{articles[1].nom} prix : {articles[1].prix}€</li>
                    <li>{articles[2].nom} prix : {articles[2].prix}€</li>
                </ul>
                <p>Total : { articles.reduce((acc, article) => {
                    return article.prix + acc
                }, 0) } € </p>
            </div>
}

export default Cart