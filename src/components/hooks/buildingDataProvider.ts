import { useState, useEffect } from "react";
import floorsFrom from "../../data/building.json";
import { Floor } from "../../store/floorreducer";

const FeaturedFloors = () => {
    

    const [floors, setFloors] = useState<Floor[]>([]);
    console.log(floors);
    

     useEffect(() => {
        let url = "src/data/building.json";
        fetch(url)
            .then(res => res.json())
            .then(floors => setFloors(floors))
            console.log(floors ,"after");
            
        }, []);

        

    return {floors};

}
export default FeaturedFloors;