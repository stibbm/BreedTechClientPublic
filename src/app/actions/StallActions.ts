import {StallOccupancy, StallOccupancyDisplayable} from '../model/Stall';
import {Horse} from '../model/Horse';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createStallOccupancyDisplayables(stallOccupanciesList: StallOccupancy[]): StallOccupancyDisplayable[] {

  // @ts-ignore
  const stallOccupancyDisplayablesList: StallOccupancyDisplayable[] = [];
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i=0; i<stallOccupanciesList.length; i++) {
    console.log('stallOccupancy');
    const stallOccupancy: StallOccupancy = stallOccupanciesList[i];
    console.log(stallOccupancy);
    let horsesListString = '';
    for (let j=0; j<stallOccupancy.horsesList.length; j++) {
      const horse: Horse = stallOccupancy.horsesList[j];
      const horseName: string = horse.name;
      horsesListString = horsesListString + horseName;
      if (j < stallOccupancy.horsesList.length-1) {
        horsesListString = horsesListString + ',';
      }
    }
    const stallOccupancyDisplayable: StallOccupancyDisplayable = {
      stallId: stallOccupancy.stallId,
      name: stallOccupancy.name,
      horsesList: horsesListString,
      capacity: stallOccupancy.capacity,
      occupants: stallOccupancy.horsesList.length,
      description: stallOccupancy.description,
      notes: stallOccupancy.notes,
      companyId: stallOccupancy.companyId,
    };
    stallOccupancyDisplayablesList.push(stallOccupancyDisplayable);
  }
  return stallOccupancyDisplayablesList;
}
