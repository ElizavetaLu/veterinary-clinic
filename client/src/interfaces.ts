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

export interface IClinic {
    _id: string,
    address: string,
    location: {
        latitude: number,
        longitude: number,
    },
}
export interface ISex {
    _id: string,
    title: string,
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
    setValue: (val: string) => void,
    required?: boolean
}

export interface IDropdown {
    value: any,
    setValue: (val: any) => void
    options: any[],
    placeholder: string
}

export interface IAccordion {
    title: string,
    options: string[]
}

export interface IRegistarationForm {
    selectedService?: string,
    selectedSpecialist?: string,
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

export interface ILoaction {
    lat: number,
    lng: number
}

export interface IMap {
    currentClinic: ILoaction
    setCurrentClinic: (location: ILoaction) => void
}

export interface IRedirectLink {
    text: string;
    route: string
}