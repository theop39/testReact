
import { plantList } from './../datas/plantList' 
import './../css/ShoppingList.css'

//key permet de tracker les elements d'une liste en cas  de add/delete pour le DOM virtuel 
//la valeur de la clé doit être unique et être stable dans le temps
//{} => boucle ou valeur de variable
//clé simple = valeur + index
function ShoppingList() {
    
    const categories = []

    plantList.forEach((plant) => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category)
        }
    })

    return  <div>
                <ul className='lmj-plant-list'>
                    {
                            categories.map((categorie, id) => 
                                    <li key={`${categorie}-${id}`}>{categorie}</li>
                            )
                    }
                </ul>
                <ul className='lmj-plant-list'>
                    {
                        plantList.map((plante) => 
                            <li key={`${plante.name}-${plante.id}`} className="lmj-plant-item">
                                {plante.name}
                                {plante.isSpecialOffer === true && <div className='lmj-sales'>sales</div>}
                            </li>
                        )
                    }
                </ul>
            </div>
}


export default ShoppingList