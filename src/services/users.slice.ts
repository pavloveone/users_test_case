import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../shared/types/users'
import { RootState } from './store'

// Define a type for the slice state
interface CounterState {
  activeElement: User | null;
  users: User[];
  filteredUsers: User[];
}

// Define the initial state using that type
const initialState: CounterState = {
  activeElement: null,
  users: [],
  filteredUsers: [],
}

export const usersSlice: any = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state: RootState, action: PayloadAction<User[]>) => {
        state.users = action.payload;
    },
    deleteUser: (state: RootState, action: PayloadAction<User>) => {
        state.users = state.users.filter((user: User) => user?.email !== action.payload?.email);
    },
    setActiveElement: (state: RootState, action: PayloadAction<User>) => {
        state.activeElement = action.payload;
    },
    setFilteredUsers: (state: RootState, action: PayloadAction<User[]>) => {
        state.filteredUsers = action.payload;
    }
  },
})

export const { setUsers, setActiveElement, deleteUser, setFilteredUsers } = usersSlice.actions

export default usersSlice.reducer