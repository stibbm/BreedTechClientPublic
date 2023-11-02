import {Horse} from '../model/Horse';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function getHorsesWithNamesMatchingQuery(horsesList: Horse[], filter: string): Horse[] {
  const filteredHorsesList: Horse[] = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i=0;i<horsesList.length;i++) {
    const horse: Horse = horsesList[i];
    if (horse.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1) {
      filteredHorsesList.push(horse);
    }
  }
  return filteredHorsesList;
}
