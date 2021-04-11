class ActorModel {
    constructor(firstNamr, lastName,birthday, image,link) {
        this.firstNamr = firstNamr;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.link = link;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthday;
        return age;
    }
}

export default ActorModel;