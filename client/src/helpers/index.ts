//count specialist's experience from now and set correct "year" form
export const countExperienceAmount = (experience: number) => {

    const date = new Date();

    const startWorking = new Date(experience);
    const specExp = Math.abs(date.getFullYear() - startWorking.getFullYear());
    const correspondingWordEnding = specExp === 1 ? 'year' : 'years';

    return `${specExp} ${correspondingWordEnding}`
}