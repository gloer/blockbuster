import BlocksGrid from "@/components/BlocksGrid/BlocksGrid";
import ProductBanner from "@/components/ProductBanner/ProductBanner";

export default function SalesPage() {
    return (
        <BlocksGrid>
            <ProductBanner
                title="Macbook Pro"
                subtitle="Mye kraft i en liten pakke"
            />
            <ProductBanner
                title="Macbook Pro"
                subtitle="Mye kraft i en liten pakke"
            />
            <ProductBanner
                title="Macbook Pro"
                subtitle="Mye kraft i en liten pakke"
            />
            <ProductBanner
                title="Macbook Pro"
                subtitle="Mye kraft i en liten pakke"
            />
        </BlocksGrid>
    );
}