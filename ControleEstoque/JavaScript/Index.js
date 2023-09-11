class Produto {

    constructor() {
        this.id = 0;
        this.arrayProdutos = [];
    }

    adicionar() {
        let produto = this.lerdados();

        if (this.validaCampos(produto)) {
            this.adicionarlementonoarray(produto);
        }

        this.listaTabela();
    }

    lerdados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeproduto = document.getElementById('adicionarproduto').value;
        produto.nomelocal = document.getElementById('adicionarlocal').value;
        produto.quantidade = document.getElementById('adicionarquantidade').value;

        return produto;

    }

    listaTabela() {

        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_local = tr.insertCell();
            let td_quantidade = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeproduto;
            td_local.innerText = this.arrayProdutos[i].nomelocal;
            td_quantidade.innerText = this.arrayProdutos[i].quantidade;

            td_id.classList.add('center')

        }

    }

    adicionarlementonoarray(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    validaCampos(produto) {

        let msg = '';

        if (produto.nomeproduto == '') {
            msg += 'Informe o nome do produto \n'
        }

        if (produto.nomelocal == '') {
            msg += 'Informe o local do produto \n'
        }

        if (produto.quantidade == '') {
            msg += 'Informe a quantidade do produto \n'
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;

    }
}

var produto = new Produto();