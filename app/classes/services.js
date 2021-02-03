let services = [];

function get countActive(){
  return services.filter(service => service.active).length;
}

function get sumActive(){
  let sum = 0;
  services.forEach(service =>{
    if(service.active){
      sum += service.price;
    }
  })
  return sum;
}
