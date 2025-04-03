export default {
    name: "homepage",
    title: "Homepage",
    type: "document",

    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "subheading",
            title: "Sub Heading",
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },

    ]
}