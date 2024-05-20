import { defineField, defineType } from "sanity";

export const bookingClient = defineType({
  name: "bookingClient",
  type: "document",
  title: "Booking Client",
  readOnly: true,
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "phoneNumber", title: "Phone number", type: "string" }),
  ],
});
