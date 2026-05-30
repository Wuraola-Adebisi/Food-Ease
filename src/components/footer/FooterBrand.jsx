import BrandLogo from "../shared/BrandLogo";
import SocialLinks from "./SocialLinks";

export default function FooterBrand() {
  return (
    <div className="space-y-4">
      <BrandLogo showMark />
      <p className="text-base max-w-xs" style={{ color: "#777" }}>
        Good food shouldn't be complicated. We make it easy to cook well, eat
        well, and enjoy every bite.
      </p>
      <SocialLinks />
    </div>
  );
}
