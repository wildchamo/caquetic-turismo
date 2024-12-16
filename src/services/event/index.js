import supabase from "../conection";

export async function get_events() {
  try {
    const { data, error } = await supabase
      .from("event")
      .select("*, municipio(name)");
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}
