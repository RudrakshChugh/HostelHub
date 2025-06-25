import API from './axios';

export async function getAttendanceSummary() {
  const res = await API.get('/attendance/summary');
  return res.data; // { summary: {...}, safeToBunk: {...} }
}

export async function markAttendance(subject, date, status) {
  const res = await API.post('/attendance/mark', { subject, date, status });
  return res.data;
}
