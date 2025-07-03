export class User {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public telephone: number,
    public estAdmin:boolean,
    public email: string,
    public mdp: string,
    public passport_num:string
) { }
}
