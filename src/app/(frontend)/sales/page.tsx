import config from "@payload-config";
import { getPayload } from "payload";

import BlocksGrid from "@/components/BlocksGrid/BlocksGrid";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ProductBanner from "@/components/ProductBanner/ProductBanner";

export default async function SalesPage() {

    const payload = await getPayload({ config });
    const page = await payload.findGlobal({
        slug: "sales-page"
    });

    if (!page || !page.layout) {
        throw new Error("Fant ikke noe her");
    }

    const blocks = page.layout;



    return (
        <>
            <BlocksGrid>
                {
                    blocks.map(block => {
                        switch (block.blockType) {
                            case "product-banner-block": {
                                return (
                                    <ProductBanner
                                        key={block.id}
                                        title={block.title}
                                        subtitle={block.subtitle}
                                    />
                                )
                            }
                            case "hero-banner-block": {
                                return (
                                    <HeroBanner key={block.id}>
                                        <h1>{block.title}</h1>
                                    </HeroBanner>
                                )
                            }
                            default: {
                                return null;
                            }
                        }
                    })
                }
            </BlocksGrid>
        </>
    );
}