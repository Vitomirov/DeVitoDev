import { portfolioContent } from "../../content/content";
import warrantyWalletPreview from "../../assets/images/WarrantyWalletScreenshot.PNG";
import videoWarrantyWallet from "../../assets/DemoVideos/warrantyWallet.mp4";
import ProjectDetail from "./ProjectDetail";

function WarrantyWallet() {
  return (
    <ProjectDetail
      id="warrantyWallet"
      content={portfolioContent.warrantyWallet}
      previewImage={warrantyWalletPreview}
      modalMedia={{ type: "video", src: videoWarrantyWallet }}
    />
  );
}

export default WarrantyWallet;
