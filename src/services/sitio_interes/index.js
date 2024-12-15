import supabase  from '../conection';

export async function get_sitios() {
    try {
      const { data, error } = await supabase
        .from('sitio_interes')
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

export async function get_sitiosMunicipio(id) {
    try {
      const { data, error } = await supabase
        .from('municipio')
        .select('name, sitio_interes(*)')
        .eq('id', id);
      if (error) {
        throw error;
      }
      console.log("asdasdasd")
      console.log(data)
      return data;
    } catch (err) {
      console.error('Error al obtener datos:', err.message);
      return null;
    }
}

export async function get_sitioById(id) {
  try {
    const { data, error } = await supabase
      .from('sitio_interes')
      .select('*')
      .eq('id', id);
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error('Error al obtener datos:', err.message);
    return null;
  }
}