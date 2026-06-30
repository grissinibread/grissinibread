import gameHub from "../assets/gameHub.png";

interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    technologies: string[];
}

let projects: Project[] = [
    {
        id: 1,
        image: 'bread',
        title: gameHub,
        description: 'something',
        technologies: ['react', 'typescript']
    }
]