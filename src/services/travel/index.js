import supabase from "../conection";

export async function createTravel(travelData) {
  const { userId, id } = travelData;

  const { data, error } = await supabase
    .from("travel")
    .insert({ fk_usuario: userId, fk_sitio: id });
}
