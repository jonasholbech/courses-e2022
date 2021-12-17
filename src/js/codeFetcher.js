export default async function codeFetcher(data) {
  console.log(data);
  let returnObj = {};
  await Promise.all(
    data.map(async (obj) => {
      const resp = await fetch(obj.url);
      returnObj[obj.key] = await resp.text();
    })
  );
  console.log(returnObj);
  return returnObj;
}
