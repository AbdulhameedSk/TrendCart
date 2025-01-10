import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
       defineField({
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
       }),
       defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: (Rule) => Rule.required(),
       }),
       defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required().min(0),
       }),
       defineField({
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required(),
       }),
       defineField({
        name: 'images',
        title: 'Product Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        validation: (Rule) => Rule.required(),
       }),
       defineField({
        name: 'category',
        title: 'Category',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
        validation: (Rule) => Rule.required(),
       }),
    //    defineField({
    //     name: 'sizes',
    //     title: 'Sizes',
    //     type: 'array',
    //     of: [{ type: 'reference', to: [{ type: 'size' }] }],
    //     validation: (Rule) => Rule.required(),
    //    }),
    //    defineField({
    //     name: 'colors',
    //     title: 'Colors',
    //     type: 'array',
    //     of: [{ type: 'reference', to: [{ type: 'color' }] }],
    //     validation: (Rule) => Rule.required(),
    //    }),
       defineField({
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: (Rule) => Rule.required(),
       }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'images',
            price: 'price',
        },
        prepare(select) {
            const { title, media, price } = select;
            return {
                title,
                media,
                subtitle: `$${price}`,
            };
        },
    },
});