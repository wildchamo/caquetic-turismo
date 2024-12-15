import supabase  from '../conection';

export async function get_municipios() {
    try {
      const { data, error } = await supabase
        .from('municipio')
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