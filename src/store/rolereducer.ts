import { createSlice} from '@reduxjs/toolkit';

 export interface Role{
  role: "Unknown Personnel" | "Guest" | "Student" | "Developer" | "Executive Personnel";

}

   

const initialState: Role  ={
  role: "Unknown Personnel"
}
  


  


const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },

}
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
