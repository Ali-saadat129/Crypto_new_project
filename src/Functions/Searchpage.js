// import React from 'react'

export function FilterData(data, filterBy) {
  
data.filter(function (element) {
    if (filterBy.length === 0) {
    console.log("all data return");
        return data;
      } 
    
    const filteredData = data.filter(function (element) {
        return element.name.toLowerCase().includes(filterBy) ||  element.symbol.toLowerCase().includes(filterBy) ;
      }); 
      return filteredData;
    });
  
  
}
