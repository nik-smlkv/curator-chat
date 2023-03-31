module.exports = class UserDto {
   firstname;
   lastname;
   email;
   id;
   isActivated;

   constructor(model){
      this.firstname = model.firstname;
      this.lastname = model.lastname;
      this.email = model.email;
      this.id = model._id;
      this.isActivated = model.isActivated;
   }
}