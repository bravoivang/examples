export const objectToArray = (dest = [], orig = {}, model = ["key", "value"]) => {
  const resutl = Object.keys(orig).reduce( (acc, cur) => {
    let item = {};
    item[model[0]] = cur;
    item[model[1]] = orig[cur];
    acc.push(item);
    return acc;
  },[]);

  return dest.concat(resutl);;
}