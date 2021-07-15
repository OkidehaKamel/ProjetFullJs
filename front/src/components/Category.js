import React from 'react';

function Category ({element}){  
    const url=window.location.href
    var array= url.split("/");
    const slug=array[array.lenght-1]
    console.log(array)
 
  return (
    <div><p>Test</p></div>
  );  
}

export default Category;

