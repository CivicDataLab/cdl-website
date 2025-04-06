import { getStrapiData } from "@/lib/utils";
import { About, Team } from "@/types/about";
import { HomeIcon } from "lucide-react";
import AboutContent from "./AboutContent";
const offerings = [
  {
    title: "Capacity Building",
    icon: HomeIcon,
  },
  {
    title: "Platforms",
    icon: HomeIcon,
  },
  {
    title: "Strategy",
    icon: HomeIcon,
  },
  {
    title: "Data Science",
    icon: HomeIcon,
  },
  {
    title: "OpenData",
    icon: HomeIcon,
  },
];

const queries = [
  "heading_items.icon",
  "heading_link",
  "process_media",
  "vision_link",
  "values_items",
  "pillar_media",
  "team_items.image",
];

const queriesTeam = ["profile", "hi_res"];

export default async function AboutPage() {
  const strapiData: About = await getStrapiData(`/about`, queries);
  const strapiTeamData: Team = await getStrapiData(`/teams`, queriesTeam);

  const data = strapiData.data.attributes;
  const teamData = strapiTeamData.data;
  const nameSortedTeamData = teamData.sort((a, b) => {
    return a.attributes.name.localeCompare(b.attributes.name);
  });

  return (
    <main>
      <AboutContent data={data} nameSortedTeamData={nameSortedTeamData}/>
    </main>
  );
}
