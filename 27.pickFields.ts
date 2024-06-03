function pickFields(data, fields) {
    const filteredData = {};

for (const field of fields) {
  
  if (data.hasOwnProperty(field)) {
   
    filteredData[field] = data[field];
  }
}

return filteredData;
}

export { pickFields };
