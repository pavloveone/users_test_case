import axios from "axios";
import { User } from "../types/users";

export const UsersServices = {
    async getAllUsers() {
        const { data } = await axios.get('https://randomuser.me/api/?results=500');
        return data.results as User[];
    }
}