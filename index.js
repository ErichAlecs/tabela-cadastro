function cadastrar(nome, sobrenome) {

    let tb = document.getElementById('tabela');
    let qtdLinhas = tb.rows.length;
    let linha = tb.insertRow(qtdLinhas);

    let cellCodigo = linha.insertcell(0);
    let cellNome = linha.insertcell (1);
    let cellSobrenome = linha.insertcell(2);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
}