function Book(title, first_name, last_name, genre, pages, read, id) {
    this.title = title,
    this.first_name = first_name,
    this.last_name = last_name,
    this.genre = genre,
    this.pages = pages,
    this.read = read,
    this.id = id || crypto.randomUUID(),
    this.author_full_name = `${this.first_name} ${this.last_name}`
}

Book.prototype = {
    info() {
        const info = `${this.title} by ${`${this.author_full_name}`}, ${this.pages} pages, ${this.read === 'true' ? 'read' : 'not read yet'}`
        return info
    }
}

export default Book