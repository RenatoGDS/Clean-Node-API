class Person {
  speak (name?: string): string {
    return `Olá ${name?.toUpperCase() ?? 'fulano'}!!!`
  }
}

const p = new Person()
p.speak('Renato')
p.speak()