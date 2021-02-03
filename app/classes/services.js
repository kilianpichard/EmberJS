let services = [];

function countActive(){
  return services.filter(service => service.active).length;
}

function sumActive(){
  let sum = 0;
  services.forEach(service =>{
    if(service.active){
      sum += service.price;
    }
  })
  return sum;
}
