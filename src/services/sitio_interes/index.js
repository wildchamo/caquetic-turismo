import supabase from "../conection";

export async function get_sitios() {
  try {
    const { data, error } = await supabase.from("sitio_interes").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}

export async function get_sitiosMunicipio() {
  try {
    const { data, error } = await supabase
      .from("municipio")
      .select("*, sitio_interes(*)");
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}

export async function get_sitioById(id) {
  try {
    const { data, error } = await supabase
      .from("sitio_interes")
      .select("*")
      .eq("id", id);
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener datos:", err.message);
    return null;
  }
}
