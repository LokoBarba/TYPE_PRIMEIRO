namespace empresa{
    export class Pessoa{
        private _nome:string;
        private _anoNasc:number;

        get nome(){
            return this._nome;
        }

        set nome(nome:string){
            this._nome=nome;
        }

        get anoNasc(){
            return this._anoNasc;
        }

        set anoNasc(anoNasc:number){
            this._anoNasc=anoNasc;
        }

        public calcularIdade(anoAtual:number){
            return anoAtual - this._anoNasc;
        }
    }
}