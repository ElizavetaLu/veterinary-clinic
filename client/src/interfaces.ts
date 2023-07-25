//components 
export interface ISectionTitle {
    title: string,
    description: string,
}

export interface IServiceCard {
    image: string,
    title: string,
    description: string,
}

export interface ISpecialistCard {
    photo: string,
    experience: number,
    specialisations: string[],
    name: string,
    description: string,
}

export interface IAchievementCard {
    icon: string,
    title: string,
    color: string,
}