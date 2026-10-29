import "./HeroBanner.css";

export type HeroBannerProps = {
    children: React.ReactNode;
}

export default function HeroBanner({ children }: HeroBannerProps) {
    return (
        <article className="HeroBanner">
            {children}
        </article>
    );
}