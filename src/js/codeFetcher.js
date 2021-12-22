export default async function codeFetcher(folder, data) {
  let returnObj = {};
  await Promise.all(
    data.map(async (path) => {
      const resp = await fetch(
        `http://127.0.0.1:8080/public/snippets/${folder}/${path}`
      );
      returnObj[path] = await resp.text();
    })
  );
  return returnObj;
}
//TODO: skal returnere et object der også har folder, så snippets kan lave linket til GH uden at sende ekstra data
