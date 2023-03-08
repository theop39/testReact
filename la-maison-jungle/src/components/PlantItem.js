
//prend comme props en parametre :
/*
name   pour le nom de la plante ;

cover   pour l'image correspondante ;

id   qui correspond à l'item de chaque élément ;

light ;

water.

*/

import './../css/PlantItem.css'
import CareScale from "./CareScale"

function PlantItem({name, cover, id, light, water, sales}) {

    return   (<li key={`${name}-${id}`} className="lmj-plant-item">
                <img src={cover} className="lmj-plant-item-cover"/>
                {name}
                {sales === true && <div className='lmj-sales'>sales</div>}
                <div>
                    <CareScale careType="light" scaleValue={light}/>
                    <CareScale careType="water" scaleValue={water}/>
                </div>
            </li>)
}

export default PlantItem