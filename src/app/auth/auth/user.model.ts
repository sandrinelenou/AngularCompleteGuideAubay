export class User{

  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date //perche ogni vlta che dovremo accere a la variabile, dobbiamo controllare la validatità
    ){}

      // si come _token è una variabile private ci vuole une funzione get per poter accedere alla variabile
    get token(){
      // check se questo _tokenExpirationDate(data di scadenza) non esiste oppure l'orario' o data corente è superiore al _tokenExpirationDate(scadenza del token) quindi il tempo è scaduto quindi non è piu un token
      if(!this._tokenExpirationDate  || new Date() > this._tokenExpirationDate){
        return null;
      }
      return this._token;
    }
}
