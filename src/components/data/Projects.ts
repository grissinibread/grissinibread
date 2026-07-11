import gameHub from "../../assets/gameHub.png";
import reportGenerator from "../../assets/reportGenerator.png";
import chatBot from "../../assets/chatbot.png";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export let projects: Project[] = [
  {
    title: "ChatBot",
    description:
      "Created an interactive AI-powered chatbot application where the robust backend API handles intelligent conversation flow and secure messaging. The frontend delivers a polished user experience with responsive design, formatted text rendering, and helpful indicators like typing status.",
    technologies: ["react", "typescript", "openAI"],
    image: chatBot,
    link: "https://github.com/grissinibread/ChatBot",
  },
  {
    title: "Game Hub",
    description:
      "Built to understand React. Retrieves information from the publicly available RAWG API and presents the data in a game discovery style site.",
    technologies: ["react", "typescript"],
    image: gameHub,
    link: "https://game-hub-nine-zeta.vercel.app/",
  },
  {
    image: reportGenerator,
    title: "Report Generator",
    description:
      "Industry sponsored project. A tool integrated into the sponsor's existing platform to generate reports with data retrieved from their propietery databases (Amazon DynamoDB & Amazon RDS).",
    technologies: ["angular", "javascript", "typescript", "jest"],
  },
  {
    title: "Dancing Robot",
    description:
      "Developed an expressive robot capable of dancing and conveying emotions through synchronized movements and animated LED facial expressions. Leveraged SPI and serial communication on an STM32 Nucleo board to control 8x8 LED matrices representing eyes and mouth, as well as motor functions for movement. Integrated motor control logic in C and manually soldered components and circuitry. Focused on creating responsive, personality-driven robot behaviors like \"happy,\" \"mad,\" and \"sad\" using motor direction and LED animations.",
    technologies: ["c"],
    link: "https://github.com/grissinibread/dancing-robot",
  },
];
