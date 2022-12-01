class Person {
    speak(name) {
        return `Olá ${name?.toUpperCase() ?? 'fulano'}!!!`;
    }
}
const p = new Person();
p.speak('Renato');
p.speak();
