import { getStrapiData } from "@/lib/utils";
import { Collaborate } from "@/types/collaborate";
import CollaborateContent from "./CollaborateContent";

const queries = ["work_img", "career_img", "collaborate_img"];

const collaborate = async () => {
  const strapiData: Collaborate = await getStrapiData(`/collaborate`, queries);
  const data = strapiData.data.attributes;

  return (
    <div>
      <CollaborateContent data={data} />
    </div>
  );
};

export default collaborate;
