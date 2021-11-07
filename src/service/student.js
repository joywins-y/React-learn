const appkey = "despair_1593934729887";

export async function getAllStudents() {
  return await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}
