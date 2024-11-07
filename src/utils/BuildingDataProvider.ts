import { useState, useEffect } from 'react';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    let url = "src/data/building.json";
    fetch(url)
        .then(res => res.json())
        .then(floors => setBuildingData(floors))
        console.log(buildingData ,"after");
        
    }, []);

    




  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    
      if(buildingData) {
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
