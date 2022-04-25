const fs = require('fs');

function loadJson(fileName){
  if(typeof fileName !== "string" || fileName.length < 4) return;
  let rawdata = fs.readFileSync(fileName);
  let data = JSON.parse(rawdata);
  return data
}

function saveJson(fileName, data){
  if(typeof fileName !== "string" || fileName.length < 4) return;
  if(typeof data !== "object") return;
  let jsonData = JSON.stringify(data, null, 4);
  fs.writeFileSync(fileName, jsonData);
  return true;
}

module.exports = {
  loadJson, saveJson
}