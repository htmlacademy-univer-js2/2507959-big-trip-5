import { filterType } from '../const';
import { isFuturePoint, isPastPoint, isPresentPoint } from './utils';

const filter = {
  [filterType.EVERYTHING]: (points)=> points,
  [filterType.FUTURE]: (points)=> points.filter((point)=>
    isFuturePoint(point.dateFrom)
  ),
  [filterType.PRESENT]: (points)=> points.filter((point)=>
    isPresentPoint(point.dateFrom, point.dateTo)
  ),
  [filterType.PAST]: (points)=> points.filter((point)=>
    isPastPoint(point.dateTo)
  )
};

export {filter};
