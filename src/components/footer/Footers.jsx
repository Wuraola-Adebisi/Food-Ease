import { FOOTER_EXPLORE_LINKS } from "../../constants";
import FooterBrand from "./FooterBrand";
import FooterCategories from "./FooterCategories";
import FooterLegal from "./FooterLegal";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer({ onCategorySelect }) {
  return (
    <footer
      className="mt-20 border-t border-gray-100 bg-gray-50/70"
      style={{ fontFamily: "var(--font-sans)", color: "#555" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterBrand />
          <FooterLinks title="Explore" links={FOOTER_EXPLORE_LINKS} />
          <FooterCategories onCategorySelect={onCategorySelect} />
          <FooterNewsletter />
        </div>

        <FooterLegal />
      </div>
    </footer>
  );
}
