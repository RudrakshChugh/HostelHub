import API from './axios';

export async function updateTimetable(timetable) {
  const res = await API.put('/timetable/update', { timetable });
  return res.data;
}
