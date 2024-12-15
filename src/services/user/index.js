import supabase  from '../conection'; 

export async function create_user({name, phone_number, email}) {
  const { data, error } = await supabase
    .from('users')
    .insert({ name, phone_number, email });
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

export async function LogIn({ email }){
  try {
    console.log(`Email: ${email}`)
    const { data, error } = await supabase.auth.signInWithOtp({
      email: "yancarlosvillegas7@gmail.com",
      // options: {
      //   shouldCreateUser: false
      // }
    });
  } catch (err) {
    console.error('Error al obtener datos:', err.message);
    return null;
  }
}