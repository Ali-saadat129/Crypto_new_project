// import React from 'react'

export function FilterData(data, filterBy) {
  if (filterBy.length === 0) {
    return data;
  }

  const filteredData = data.filter(function (element) {

    return (
      element.name.toLowerCase().includes(filterBy.toLowerCase()) ||
      element.symbol.toLowerCase().includes(filterBy.toLowerCase())
    );
  });

  return filteredData;
}