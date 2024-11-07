import { createSlice} from '@reduxjs/toolkit';

// interface Role{

// }

interface RoleState {
    role: "Unknown Personnel" | "Guest" | "Student" | "Developer" | "Executive Personnel";
}

const initialState: RoleState = {
    role: "Unknown Personnel"
};

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
