import axios from "axios";

const URL = "https://medic-d21be-default-rtdb.firebaseio.com/";

export async function postMedication(data) {
  const response = axios.post(URL + "medication.json", data);

  return (await response).data.name;
}

export async function getMedication() {
  const response = await axios.get(URL + "medication.json");
  const loadedData = [];

  for (const key in response.data) {
    loadedData.push({
      id: key,
      ...response.data[key],
    });
  }
  return loadedData;
}

export async function deleteMedication(id) {
  await axios.delete(URL + `medication/${id}.json`);
}

export async function postAppointment(data) {
  const response = await axios.post(URL + "appointment.json", data);
  return response.data.name;
}

export async function getAppointment() {
  const response = await axios.get(URL + "appointment.json");
  const loadedData = [];

  for (const key in response.data) {
    loadedData.push({
      id: key,
      ...response.data[key],
    });
  }
  return loadedData;
}