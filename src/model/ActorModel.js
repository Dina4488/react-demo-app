class ActorModel {
    
    constructor(firstName, lastName,birthday, image,link) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.link = link;
    }

    getAge() {       
            var today = new Date();
            var birthDate = new Date(this.birthday);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
  
}

export default ActorModel;