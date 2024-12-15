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