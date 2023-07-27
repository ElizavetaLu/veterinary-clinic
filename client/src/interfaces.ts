//components 
export interface ISectionTitle {
    title: string,
    description: string,
}

export interface IProcedure {
    name: string,
    price: string,
    timeRange: string,
}

export interface IImages {
    small: string,
    large: string
}

export interface IService {
    _id: string,
    images: IImages,
    title: string,
    description: string,
    about: string,
    procedures: IProcedure[]
}

export interface ISpecialist {
    _id: string,
    images: IImages,
    name: string,
    specializations: string[],
    about: string,
    certificates: string[] | null,
    schedule: null,
    experience: number
}

export interface IAchievementCard {
    icon: string,
    title: string,
    color: string,
}

export interface IInput {
    type?: string,
    placeholder: string,
    value: string,
    setValue: (val: string) => void
}

export interface IDropdown {
    selected: string,
    options: any[]
}

export interface IAccordion {
    title: string,
    options: string[]
}

export interface IRegistarationForm {
    service?: string,
    specialistName?: string,
    clinicAddress?: string,
    scrollTo: any;
}

export interface INavLink {
    icon: string | null,
    name: string
}

export interface ILinksBlock {
    title: string,
    nav: INavLink[]
}

export interface ISwitcher {
    isActive: boolean,
    setIsActive: (val: boolean) => void
}

export interface IProceduresTable {
    list: IProcedure[]
}