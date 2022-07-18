export default {
  name: "featured",
  type: "document",
  title: "Featured Menu Category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured category title",
      validation: (Rule) =>  Rule.required()
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: {{ type: "reference", to: {{ type: "restaurant" }} }}
    }
  ]
}