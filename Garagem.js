let CDE = {vulgo:"Cara dos emails", Nome:"Lucas", Sobrenome:"Leandro", Curso:"Tecnólogo em análise e desenvolvimento de sistemas", Aproveitamento:100};

const mostradata = new Date;
document.getElementById("cabecalho").innerHTML = mostradata;
console.log(CDE);

const DEV = new Map();

DEV.set("Mestre de ferrão", "Caminho dos irmãos");
DEV.set("coxinha de cheddar", "Caminho da professora");
DEV.set("Xamã", "Mestre das almas");
DEV.set("classe hipotetica", "Usurpador");
DEV.set("Sonhador", "Glorioso");


for (let [c,v] of DEV){

    var trcao = document.createElement("tr");
    document.getElementById("almasdoabismo").appendChild(trcao)

    var tdclasse = document.createElement("td");
    tdclasse.innerHTML = c;
    trcao.appendChild(tdclasse);

    var tdcaminho = document.createElement("td");
    tdcaminho.innerHTML = v;
    trcao.appendChild(tdcaminho);

}


document.addEventListener("DOMContentLoaded", function(){
        
    let titulo = ["Água em pó", "O Pão de Queijo", "5,3ml de sangue de Genji"];

    let imagem = [
        "https://pbs.twimg.com/media/HFV4YjSWgAA2bfN.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuv73XgJY7TvTTMC1agoJqaERG04CwS3TWuA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5rlyf7uPtw6Gqs6LqNwdijWn_pXczzdKfQ&s",
    ];

    let texto = [
        "Nossa estimada água em pó! Esteve perdida no armário da cozinheira por séculos. A garagem se desculpa por qualquer ocorridos de desidratação em nossas filiais <br> R$20,00", 
        "Após o seu sucesso na produção do ADA, nossos clientes não pararam de pedir a adição do pão de queijo na garagem, conhecido por ser a personificação da entropia, pois bem, nosso fornecedor o encontrou! <br> R$ [pão de queijo],00",
        "Á pedido de uma cliente fiel da garagem, nós obtivemos exatamente 5,3ml de sangue de Genji! ATENÇÃO: possui sangue de vampiro, lobisomen, quibungo, general demôniaco, força astral e derivados em sua composição <br> R$100,00 ou 50 Peças de ouro",
    ];


    var atual;
    
    var novoobj;

    loop1: for (let j = 0; j < 3; j++){
        if (j === 0){
            atual = document.getElementById("titulo");

            novoobj = titulo;
            //console.log("Titulo: ")
        }
        else if (j === 1){
            atual = document.getElementById("imagem");
            
            novoobj = imagem;
            //console.log("imagens: ")
        }
        else{
            atual = document.getElementById("texto");
            
            novoobj = texto;
            //console.log("Textos: ")
        }
        loop2: for (let i = 0; i < 3 ; i++){
            //console.log(novoobj[i])
            if (j === 1){
                let td = document.createElement("td");
                let addimagem = document.createElement("img");
                addimagem.src = novoobj[i];
                td.appendChild(addimagem);
                atual.appendChild(td);
            }
            else {
                let obj = document.createElement(j === 0 ? "th" : "td");

                obj.innerHTML = novoobj[i];
                atual.appendChild(obj); 
            }
        }
    }

})

