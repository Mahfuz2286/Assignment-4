function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  return street + "," + house + "," + society;
}
const inputObject = {
  street: 10,
  house: "15A",
  society: "Earth Perfect"
};
console.log(findAddress(inputObject));
const incompleteObject = {
  street: 10,
  society: "Earth perfect"
};
console.log(findAddress(incompleteObject));
const icompleteObject = {
  street: 10
};
console.log(findAddress(icompleteObject));


