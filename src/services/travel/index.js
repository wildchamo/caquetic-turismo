import supabase  from '../conection'; 
import { getByEmail, isLogged } from '../user';

export async function createTravel(id) {
    user = isLogged().email;
    id_user = getByEmail(user);
    console.log(id_user)
}