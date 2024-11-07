import { createSlice} from '@reduxjs/toolkit';
import Floor from '../pages/Floor/Floor';

 export interface Floor{
    name: string;
      soldiers: number;
      purpose: string;
      description:string;
      activity: string;
      isAuth: boolean;

}

   

 const floor1 = {
    name: "First Floor",
    soldiers: 12,
    purpose: "GYM",
    description: "This floor is dedicated for workout, every person can come and work out, the GYM is open for everyone",
    activity: "work out",
    isAuth: true
  }
 const floor2 = {
    name: "Second Floor",
    soldiers: 8,
    purpose: "Dining Room",
    description: "The dining room where soldiers gather to eat and socialize. This space has a kitchen and a dining area with enough seating for the building’s personnel.",
    activity: "eat and socialize",
    isAuth: false

  }
  const floor3 = {
    name: "Third Floor",
    soldiers: 15,
    purpose: "Classroom",
    description: "The classroom where soldiers receive training. Equipped with desks, chairs, and digital screens for presentations and instructional videos.",
    activity: "review documents",
    isAuth: false
  }
  const floor4 = {
    name: "Fourth Floor",
    soldiers: 10,
    purpose: "Programming Floor",
    description: "The programming floor where full stack developers work on various military projects. This floor is equipped with computers and network infrastructure for coding and testing.",
    activity: "develop software",
    isAuth: false
  }
  const floor5 = {
    name: "Fifth Floor",
    soldiers: 3,
    purpose: "Commander Room",
    description: "The commander's office where disciplinary actions are conducted. Soldiers who require reprimanding are brought here to discuss corrective measures.",
    activity: "conduct meetings",
    isAuth: false
  }

const initialState: Floor[] = [floor1, floor2, floor3, floor4, floor5];
  

const floorSlice = createSlice({
  name: 'floors',
  initialState,
  reducers: {
    changeAccess: (state, action) => {
        const floor = state.find((floor) => floor.purpose === action.payload.floorName);
        const index = state.findIndex((floor) => floor.purpose === action.payload.floorName);
        if (floor) {
            for (let i = 0; i < index; i++) {
                state[i].isAuth = true;
            }              
            }
  
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
