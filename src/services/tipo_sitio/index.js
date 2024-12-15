import supabase  from '../conection';

export async function get_tpSitios() {
    try {
      const { data, error } = await supabase
        .from('tipo_sitio')
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