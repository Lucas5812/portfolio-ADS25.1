//var contratados = ["Lucas Leandro", "Ronaldo Cesar", "Felipe Leonardo", "João Paulo", "Mariana França", "José Marcus", "Marco Antônio", "Arthur Luís"];
//var funcionarios = ["Cara dos emails", "Jovem Aprendiz", "Gerente", "Caixista", "Cozinheira", "Motoboy", "Fornecedor", "Faz-tudo"];
//var salario = [0, 0, 0, "2 gravetos + água sanitária", 0, 0, 0, 0]


function geralista() {

    console.log("geralista foi chamado")
    document.getElementById("revelar").style.display = "none";

    for (let i = 0; i < obj.Funcionarios.length; i++ ) {
        let datafunc = document.createElement("li");
        datafunc.textContent = funcionarios[i];
        document.getElementById("funcionarios").appendChild(datafunc);

        let datacont = document.createElement("li")
        datacont.textContent = contratados[i];
        document.getElementById("contratados").appendChild(datacont);
        
    }
    
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

console.log("Guarda noturno");  
console.log("Heitor Higino");

console.log(" ̶C̶a̶r̶a̶ ̶d̶o̶s̶ ̶h̶t̶m̶l̶s");
console.log(" ̶L̶e̶s̶h̶y̶  Desligado");    


function ver(){

    let pog = new Blob(

        [json],
        {type: "application/json" }
    )

    let link = document.createElement(a)

    link.href = URL.createObjectURL(pog)

    link.download = "Fenda.json"

    link.click();

}


//var dados;

async function CarregarJSON() {
    let dados_antigos = await fetch("Fenda.json");    
    let dados = await dados_antigos.json();
    console.log(dados);
    
    //document.getElementById("texto").innerHTML = "Nome: " + dados.Funcionarios[random].Nome + ",    Vulgo:  " + dados.Funcionarios[random].Vulgo + ",   Salario: " + dados.Funcionarios[random].Salario;
}


let random = getRndInteger(0, 8);
CarregarJSON();


