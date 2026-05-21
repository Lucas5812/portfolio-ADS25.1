var contratados = ["Lucas Leandro", "Ronaldo Cesar", "Felipe Leonardo", "João Paulo", "Mariana França", "José Marcus", "Marco Antônio", "Arthur Luís"];
var funcionarios = ["Cara dos emails", "Jovem Aprendiz", "Gerente", "Caixista", "Cozinheira", "Motoboy", "Fornecedor", "Faz-tudo"];


function geralista() {

    //console.log("geralista foi chamado")
    document.getElementById("revelar").style.display = "none";

    for (let i = 0; i < contratados.length; i++ ) {
        let datafunc = document.createElement("li");
        datafunc.textContent = funcionarios[i];
        document.getElementById("funcionarios").appendChild(datafunc);

        let datacont = document.createElement("li")
        datacont.textContent = contratados[i];
        document.getElementById("contratados").appendChild(datacont);
        
    }
    console.log("Guarda noturno");  
    console.log("Heitor Higino");

    console.log(" ̶C̶a̶r̶a̶ ̶d̶o̶s̶ ̶h̶t̶m̶l̶s")
    console.log(" ̶L̶e̶s̶h̶y̶  Desligado")    
}

let