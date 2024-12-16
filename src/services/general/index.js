import supabase  from '../conection';

export async function fetchAllTables() {
    try {
        const tables = ['municipio', 'event', 'tipo_sitio', 'sitio_interes'];

        const results = await Promise.all(
          tables.map(async (table) => {
            const { data, error } = await supabase.from(table).select('*');
            if (error) {
              console.error(`Error al consultar la tabla ${table}:`, error);
              return { table, error };
            }
            return { table, data };
          })
        );

        console.log('Resultados:', results);
        return results;
    } catch (err) {
      console.error('Error al obtener datos:', err.message);
      return null;
    }
  }

  export async function get_sitiosEventsMunicipio() {
    try {
      const { data, error } = await supabase
        .from("municipio")
        .select("*, sitio_interes(*), event(*)")
        .filter("sitio_interes.coordX", "not.is", null);
      if (error) {
        throw error;
      }

      console.log(data)
      return data;
    } catch (err) {
      console.error("Error al obtener datos:", err.message);
      return null;
    }
}