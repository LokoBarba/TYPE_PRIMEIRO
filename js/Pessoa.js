"use strict";
var empresa;
(function (empresa) {
    class Pessoa {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get anoNasc() {
            return this._anoNasc;
        }
        set anoNasc(anoNasc) {
            this._anoNasc = anoNasc;
        }
        calcularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
    }
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
