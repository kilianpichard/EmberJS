
export default class Services{
  constructor(data) {
    this.services = data;
  }

  get countActive(){
    let count =  this.services.filter(service => service.active).length;
    let text;
    if(count == 0){
      text = "Aucun service selectionné";
    }else if(count == 1){
      text = "1 service selectionné";
    }else{
      text = count + " services selectionnés";
    }
    return text;
  }

  get sumActive(){
    let sum = 0;
    this.services.forEach(service =>{
      if(service.active){
        sum += service.price;
      }
    })
    return sum;
  }
}

