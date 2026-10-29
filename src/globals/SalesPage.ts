
import { HeroBannerBlock } from "@/blocks/HeroBannerBlock";
import { ProductBannerBlock } from "@/blocks/ProductBannerBlock";
import { GlobalConfig } from "payload";

export const SalesPage: GlobalConfig = {
    slug: "sales-page",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "layout",
            label: "Bannere",
            type: "blocks",
            blocks: [ProductBannerBlock, HeroBannerBlock],
        },
    ],

};