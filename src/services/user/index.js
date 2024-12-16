import supabase from "../conection";

export async function SignUpUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Error al crear el usuario:", error.message);
  } else {
    console.log("Usuario creado exitosamente:", data);
  }
}

export async function create_user({ name, phone_number, email }) {
  const { data, error } = await supabase
    .from("users")
    .insert({ name, phone_number, email });
  if (error) {
    console.error("Error al insertar datos:", error);
  } else {
    console.log("Datos insertados:", data);
  }
}

export async function get_users() {
  try {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}

export async function LogIn({ email }) {
  try {
    console.log(`Email: ${email}`);
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
    });
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}

export async function getByEmail(email) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, name")
      .eq("email", email);
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}

export async function isLogged() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return null;
  }
  return data;
}

export async function getUserTravels(id) {
  try {
    const { data, error } = await supabase
      .from("travel")
      .select("*")
      .eq("fk_usuario", id);
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}
