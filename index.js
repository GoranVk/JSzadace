function HulkSmash(e){
    e.preventDefault();
    let yugo=document.getElementById("text").value;
    let brojznakova=yugo.length;
    const myArray=yugo.split(/[.?!]/);
    document.getElementById("kolikoRecenica").innerHTML =`Imate ${(myArray.length)-1} recenica`
    document.getElementById("brojZnakova").innerHTML = `Broj znakova u rečenici je ${brojznakova}`;
  }
