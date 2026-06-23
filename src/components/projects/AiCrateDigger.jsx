import { portfolioContent } from "../../content/content";
import aiCrateDiggerPreview from "../../assets/images/AiCrateDiggerScreenshot.PNG";
import ProjectDetail from "./ProjectDetail";

function AiCrateDigger() {
  return (
    <ProjectDetail
      id="aiCrateDigger"
      content={portfolioContent.aiCrateDigger}
      previewImage={aiCrateDiggerPreview}
      modalMedia={{ type: "image", src: aiCrateDiggerPreview }}
    />
  );
}

export default AiCrateDigger;
