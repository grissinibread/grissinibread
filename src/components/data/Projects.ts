import gameHub from "../../assets/gameHub.png";

export interface Project {
    id: number;
    image?: string;
    title: string;
    description: string;
    technologies: string[];
}

let projects: Project[] = [
    {
        id: 0,
        image: gameHub,
        title: 'Game Hub',
        description: 'Built to understand React.',
        technologies: ['react', 'typescript']
    },
]

export default projects;