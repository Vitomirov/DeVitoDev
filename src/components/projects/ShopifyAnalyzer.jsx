import { portfolioContent } from "../../content/content";
import shopifyPreview from "../../assets/images/ShopifyAnalyzerScreenshot.PNG";
import ProjectDetail from "./ProjectDetail";

function ShopifyAnalyzer() {
  return (
    <ProjectDetail
      id="shopifyAnalyzer"
      content={portfolioContent.shopifyAnalyzer}
      previewImage={shopifyPreview}
      modalMedia={{ type: "image", src: shopifyPreview }}
    />
  );
}

export default ShopifyAnalyzer;
