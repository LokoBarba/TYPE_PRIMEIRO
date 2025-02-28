namespace empresa{
    let p = new Pessoa();
    
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;
    const calc = document.getElementById("calc") as HTMLInputElement;

    calc.addEventListener("click", ()=>{
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        p.calcularIdade;

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
    })
}
    /*const nomeElement = document.getElementById("nome") as HTMLInputElement;
    const idadeElement = document.getElementById("idade") as HTMLInputElement;
    const anoElement = document.getElementById("ano") as HTMLInputElement;*/
    

    /*function calcularIdade(): void{
        //Pega os valores de nome e ano de nascimento
        const nome = campoNome.value;
        const anoNascimento = Number(campoAno);
        if(!nome || isNaN(anoNascimento) || anoNascimento > new Date().getFullYear()){
            alert('Por favor, insira um nome e um ano de nascimento válido.');
            return;
        }

        //Obtem o ano atual
        const anoAtual = new Date().getFullYear();

        const idade = anoAtual - anoNascimento;

        //Atualiza a pagina com as informações
        nomeElement.textContent = p.nome;
        idadeElement.textContent = idade.toString();
        anoElement.textContent = anoAtual.toString();

        //Adiciona evento de clique no botão para calcular a idade
        calcButton.addEventListener('click', calcularIdade);

    };
}
    
    p.nome = "Lola";
    p.anoNasc = 2006;
    p.calcularIdade;

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("ano").textContent = p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
}*/