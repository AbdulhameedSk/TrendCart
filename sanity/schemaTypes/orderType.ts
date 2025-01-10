import { BasketIcon } from "@sanity/icons";
import { defineField, defineType, defineArrayMember } from "sanity";

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'stripeCheckoutSessionId',
            title: 'Stripe Checkout Session ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'stripeCustomerId',
            title: 'Stripe Customer ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'clerkUserId',
            title: 'Store User ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'customerName',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'stripePaymentIntentId',
            title: 'Stripe Payment Intent ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'products',
            title: 'Products',
            type: 'array',
            of: [
                defineArrayMember({
                    type:'object',
                    fields: [
                        defineField({
                            name:'product',
                            title: 'Product Brought',
                            type:'reference',
                            to: [{type: 'product'}]
                        }),
                        defineField({
                            name:'quantity',
                            title: 'Quantity',
                            type: 'number',
                            validation: (Rule) => Rule.required(),
                        })
                    ],
                    preview: {
                        select: {
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.image',
                            price: 'product.price',
                            currency: 'product.currency',

                        },
                        prepare(select){
                            return {
                                title: `${select.product} x ${select.quantity}`,
                                subtitle: `${select.price} ${select.currency}`,
                                media: select.image,
                            } 
                        }
                    }
                })
            ],
        }),
        defineField({
            name:'totalPrice',
            title: 'Total Price',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'amountDiscount',
            title: 'Amount Discount',
            type: 'number',
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name:'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [{title:'Pending',value:'pending' },{title:'Processing',value:'processing' },{title:'Shipped',value:'shipped' },{title:'Completed',value:'completed' },{title:'Cancelled',value:'cancelled'}],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'orderDate',
            title: 'Order Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            orderNumber: 'orderNumber',
            customerName: 'customerName',
            amount: 'totalPrice',
            currency: 'currency',
            orderId: 'orderId',
            email: 'email',
            status: 'status',
            orderDate: 'orderDate',
        },
        prepare(select){
            return {
                title: `${select.orderNumber} - ${select.customerName}`,
                subtitle: `${select.amount} ${select.currency}`,
                media: BasketIcon,
            }
        }
    },
})
