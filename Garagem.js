let CDE = {vulgo:"Cara dos emails", Nome:"Lucas", Sobrenome:"Leandro", Curso:"Tecnólogo em análise e desenvolvimento de sistemas", Aproveitamento:100};

const mostradata = new Date;
document.getElementById("cabecalho").innerHTML = mostradata;
console.log(CDE);




document.addEventListener("DOMContentLoaded", function(){
        
    let titulo = ["Água em pó", "O Pão de Queijo", "5,3ml de sangue de Genji"];

    let imagem = ["https://pbs.twimg.com/media/HFV4YjSWgAA2bfN.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuv73XgJY7TvTTMC1agoJqaERG04CwS3TWuA&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5rlyf7uPtw6Gqs6LqNwdijWn_pXczzdKfQ&s"];

    let texto = ["Nossa estimada água em pó! Esteve perdida no armário da cozinheira por séculos. A garagem se desculpa por qualquer ocorridos de desidratação em nossas filiais <br> R$20,00", "Após o seu sucesso na produção do ADA, nossos clientes não pararam de pedir a adição do pão de queijo na garagem, conhecido por ser a personificação da entropia, pois bem, nosso fornecedor o encontrou! <br> R$ [pão de queijo],00", "Á pedido de uma cliente fiel da garagem, nós obtivemos exatamente 5,3ml de sangue de Genji! ATENÇÃO: possui sangue de vampiro, lobisomen, quibungo, general demôniaco, força astral e derivados em sua composição <br> R$100,00 ou 50 Peças de ouro"];


    var atual;
    var obj;
    var novoobj;

    loop1: for (let j = 0; j < 3; j++){
        if (j == 0){
            atual = document.getElementById("titulo");
            obj = document.createElement("th");
            novoobj = titulo;
        }
        else if (j == 1){
            atual = document.getElementById("imagem");
            obj = document.createElement("td");

            novoobj = imagem;
        }
        else{
            atual = document.getElementById("texto");
            novoobj = texto;
        }
        loop2: for (let i = 0; i < 3 ; i++){
            if (j == 1){
                var addimagem = document.createElement("img");
                addimagem.src = novoobj[i]
            }
            else {
                obj.innerText = novoobj[i];
                atual.appendChild(obj);
            }
        }
    }

})

