import { Block, slugField } from "payload";

export const ProductBannerBlock: Block = {
    slug: "product-banner-block",
    interfaceName: "ProductBannerBlockType",
    labels: {
        singular: "Product Banner Block",
        plural: "Product Banner Blocks",
    },
    fields: [
        {
            name: "title",
            type: "text",
            label: "Tittel",
            required: true,
            unique: true,
        },
        slugField({
            useAsSlug: "title", // Er default
        }),
        {
            name: "subtitle",
            type: "text",
            label: "Undertittel",
            required: true,
        },
    ],
};