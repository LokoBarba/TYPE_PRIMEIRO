namespace empresa{
    let p = new Pessoa();
    p.nome = "Lola";
    p.anoNasc = 2007;
    p.calcularIdade;

    document.getElementById("nome").textContent = p.nome;
    document.getElementById("ano").textContent = p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
}