import gameHub from "../../assets/gameHub.png";
import reportGenerator from "../../assets/reportGenerator.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

let projects: Project[] = [
  {
    id: 0,
    title: "Game Hub",
    description:
      "Built to understand React. Retrieves information from the publicly available RAWG API and presents the data in a game discovery style site.",
    technologies: ["react", "typescript"],
    image: gameHub,
    link: "https://github.com/grissinibread/game-hub",
  },
  {
    id: 1,
    image: reportGenerator,
    title: "Report Generator",
    description:
      "Industry sponsored project. A tool integrated into the sponsor's existing platform to generate reports with data retrieved from their propietery databases (Amazon DynamoDB & Amazon RDS).",
    technologies: ["angular", "javascript", "typescript", "jest"],
  },
];

export default projects;
