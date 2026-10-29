import { Block } from "payload";

export const HeroBannerBlock: Block = {
    slug: "hero-banner-block",
    interfaceName: "HeroBannerBlockType",
    labels: {
        singular: "Hero Banner Block",
        plural: "Hero Banner Blocks",
    },
    fields: [
        {
            name: "title",
            type: "text",
            label: "Tittel",
            required: true,            
        },           
    ],
};