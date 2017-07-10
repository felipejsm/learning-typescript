interface Contact {
    name : string,
    email: string,
    phone: string
}

var addressBook : Contact[] = [];

var contact: Contact = {
    name: "Felipe",
    email: "felipe@email.com",
    phone:"5555-6666"
}

addressBook.push(contact);