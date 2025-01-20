import { TagIcon } from "@sanity/icons";
import { defineField,defineType } from "sanity";

export const salesType = defineType({
    name: 'sales',
    title: 'Sales',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
            // validation: Rule => Rule.required().min(3).max(100)
        }),
        defineField({
            name: 'descriptoin',
            title: 'Sale Description',
            type: 'text',
            // validation: Rule => Rule.required().min(1)
        }),
        defineField({
            name: 'DiscountAmount',
            title: 'Discount Amount',
            type: 'number',
            description: 'Enter the discount amount in percentage',
            // validation: Rule => Rule.required().min(0)
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            // validation: Rule => Rule.required().min(3).max(100)
            description: 'Check this box to make the sale active',
            initialValue: true
        }),
        defineField({
            name: 'coupenCode',
            title: 'Coupen Code',
            type: 'string',
            // validation: Rule => Rule.required().min(3).max(100)
        }),
        defineField({
            name:'validForm',
            title:'Valid From',
            type:'datetime',
            // validation: Rule => Rule.required().min(3).max(100)
        }),
        defineField({
            name:'validUntil',
            title:'Valid Until',
            type:'datetime',
            // validation: Rule => Rule.required().min(3).max(100)
        }),

    ],
    preview: {
        select: {
            title: 'title',
            discountAmount: 'DiscountAmount',
            coupenCode: 'coupenCode',
            isActive: 'isActive',
        },
        prepare(selection) {
            const { title, discountAmount, coupenCode, isActive } = selection;
            const status = isActive ? 'Active' : 'Inactive';
            return {
                title: title,
                subtitle: `${discountAmount}% off | ${coupenCode} | ${status}`,
            };
        }
    }
});

export default salesType;