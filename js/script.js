let shop = document.getElementById("Mydata");
let no = 1;
const Myfun = ()=>{

    fetch("https://restcountries.com/v3.1/all").then((res)=>{
        return res.json();
    }).then((result)=>{
        console.log(result);
        result.forEach(element => {
            // p = '';
            var a =[]

            for (const key in element.languages) {
                console.log(element.languages[key]);
                a.push(element.languages[key]);
                // p += `${element.languages[key]}` 
            }
            console.log(element);            
            shop.innerHTML += `<tr>
            <th scope="col" id="no">${no}</th>
            <th><img src="${element.flags.png}" alt="flags" width="80px"></th>
            <th scope="col">${element.name.common}</th>
            <th scope="col" id="lan">${a}</th>
          </tr>`
          no++;
        });

    }).catch((err)=>{
        console.log("error" , err);
    })
    
}
Myfun();