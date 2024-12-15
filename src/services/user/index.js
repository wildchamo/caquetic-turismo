import supabase  from './conection'; 

export async function create_user({name, phone_number}) {
  const { data, error } = await supabase
    .from('users')
    .insert({ name, phone_number });
  if (error) {
    console.error('Error al insertar datos:', error);
  } else {
    console.log('Datos insertados:', data);
  }
}

export async function get_users() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*');
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error('Error al obtener datos:', err.message);
    return null;
  }
}