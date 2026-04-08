export const extractImages = (text:string) => { 
    const regexIMG = /<img.*?src="(?<linkIMG>[^"]+)"/g;
    const matches = [...text.matchAll(regexIMG)];

    return matches
    .map(match => match.groups?.linkIMG)
    .filter((url): url is string => url !== undefined)
}