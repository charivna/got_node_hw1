const contactsOperation = require("./contacts.js");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsOperation.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await contactsOperation.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsOperation.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);

    case "remove":
      const removeContact = await contactsOperation.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({ action: "list" });
// // invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// // invokeAction({
// //   action: "add",
// //   name: "Kate",
// //   email: "kate@gmail.com",
// //   phone: "(123) 456-7890",
// // });
// // invokeAction({ action: "remove", id: "D5vlmJ_ChalWNW_ZCI451" });
