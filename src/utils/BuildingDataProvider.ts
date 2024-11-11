import { useState, useEffect } from 'react';
import data from "../data/building.json";

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>(data);
  
  

  useEffect(() => {
    let url = "src/data/building.json";
    fetch(url)
        .then(res => res.json())
        .then(data => setBuildingData(data))
        console.log(buildingData ,"after");
        
        
        
    }, []);

  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    
      if(buildingData) {
        console.log(buildingData[floorIndex]);
        
      return buildingData[floorIndex];
  };
      
  }
  
  const getListOfActivities = ():string[] | undefined=>{
    if(buildingData){
      const activities = buildingData.map((b )=> b.activity )
      return activities
    }
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
 
  };
 
};

export default useBuildingData;
