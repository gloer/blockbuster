import "./BlocksGrid.css";

export type BlocksGridProps = {
    children: React.ReactNode;
}

export default function BlocksGrid({ children }: BlocksGridProps) {
    return (
        <section className="BlocksGrid">
            {children}
        </section>
    );
}