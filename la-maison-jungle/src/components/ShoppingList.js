
import { plantList } from './../datas/plantList' 
import './../css/ShoppingList.css'
import CareScale from './CareScale'
import PlantItem from './PlantItem'

//key permet de tracker les elements d'une liste en cas  de add/delete pour le DOM virtuel 
//la valeur de la clé doit être unique et être stable dans le temps
//{} => boucle ou valeur de variable
//clé simple = valeur + index
//prop pour transmettre des propriétés d'un element parent a un element fils
//prog toujours en lecture seule
function ShoppingList() {
    
    const categories = []

    plantList.forEach((plant) => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category)
        }
    })

    //const test = <p>test</p>


    /*
                  <ul id="categories">
                    {
                            categories.map((categorie, id) => 
                                    <li key={`${categorie}-${id}`}>{categorie}</li>
                            )
                    }
                </ul> 
    
    */

    return  <div>
                <div id="main">
                    <ul className='lmj-plant-list'>
                        {
                            plantList.map((plante) => 
                            <PlantItem 
                                    name={plante.name}
                                    cover={plante.cover}
                                    id={plante.id}
                                    light={plante.light}
                                    water={plante.water}
                                    sales={plante.isBestSale}
                            />
                            )
                        }
                    </ul>
                </div>
            </div>
}

export default ShoppingList