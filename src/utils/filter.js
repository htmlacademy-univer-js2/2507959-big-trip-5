import { FilterType } from '../const';
import { presentPoint, futurePoint, pastPoint, } from './utils';

const filter = {
  [FilterType.EVERYTHING]: (points)=> points,
  [FilterType.FUTURE]: (points)=> points.filter((point)=>
    futurePoint(point.dateFrom)
  ),
  [FilterType.PRESENT]: (points)=> points.filter((point)=>
    presentPoint(point.dateFrom, point.dateTo)
  ),
  [FilterType.PAST]: (points)=> points.filter((point)=>
    pastPoint(point.dateTo)
  )
};

export {filter};
