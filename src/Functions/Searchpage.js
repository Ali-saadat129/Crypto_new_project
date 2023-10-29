// import React from 'react'

export function FilterData(data, filterBy) {
  console.log(data)
data.filter(function (element) {
    if (filterBy.length === 0) {
        return data;
      } 
    
    const filteredData = data.filter(function (element) {
        return element.name.toLowerCase().includes(filterBy) ||  element.symbol.toLowerCase().includes(filterBy) ;
      }); 
      
      return filteredData;
    });
  
  
}
