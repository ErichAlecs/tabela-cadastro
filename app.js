function cadastrar(nome, sobrenome, email, datanascimento, endereco, numero, cidade, estado) {

    var tb = document.getElementById("tabela");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellSobrenome = linha.insertCell(2);
    var cellemail = linha.insertCell(3);
    var celldatanascimento = linha.insertCell(4);
    var cellendereco = linha.insertCell(5);
    var cellnumero = linha.insertCell(6);
    var cellcidade = linha.insertCell(7);
    var cellestado = linha.insertCell(8);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellemail.innerHTML = email;
    celldatanascimento.innerHTML = datanascimento;
    cellendereco.innerHTML = endereco;
    cellnumero.innerHTML = numero;
    cellcidade.innerHTML = cidade;
    cellestado.innerHTML = estado;
}