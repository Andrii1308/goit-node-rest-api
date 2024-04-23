import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getOneContact = (id) => Contact.findOne(id);

export const addContact = (data) => Contact.create(data);

export const updateOneContact = (id, data) => Contact.findOneAndUpdate(id, data);

export const deleteOneContact = (id) => Contact.findOneAndDelete(id);

export const updateStatusContact = (id, body) => Contact.findOneAndUpdate(id, body);