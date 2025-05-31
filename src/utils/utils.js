import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMM';
const MS_IN_MINUTE = 1000 * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;

function humanizeDate(date, format = DATE_FORMAT) {
  return date ? dayjs(date).format(format) : '';
}

const getRandomInteger = (end, start = 0) => {
  const lower = Math.ceil(Math.min(start, end));
  const upper = Math.floor(Math.max(start, end));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

function getDurationTime(startDate, endDate) {
  const duration = dayjs(endDate).diff(dayjs(startDate));
  const days = Math.floor(duration / MS_IN_DAY);
  const hours = Math.floor((duration % MS_IN_DAY) / MS_IN_HOUR);
  const minutes = Math.floor((duration % MS_IN_HOUR) / MS_IN_MINUTE);

  if (days > 0) {
    return `${String(days).padStart(2, '0')}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  } else if (hours > 0) {
    return `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
  }
  return `${String(minutes).padStart(2, '0')}M`;
}

function capitalizeString(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function getOfferKeyword(title) {
  const words = title.split(' ');
  return words[words.length - 1];
}

function presentPoint(dateFrom, dateTo) {
  return dateFrom && dateTo && !dayjs().isAfter(dateTo, 'D') && !dayjs().isBefore(dateFrom, 'D');
}

function futurePoint(date) {
  return date && dayjs().isBefore(date, 'D');
}

function sortPointByDay(pointA, pointB) {
  return dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
}

function pastPoint(date) {
  return date && dayjs().isAfter(date, 'D');
}

function sortPointByTime(pointA, pointB) {
  const durationA = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const durationB = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));
  return durationB - durationA;
}

function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');
}

export {
  getRandomInteger,
  humanizeDate,
  getDurationTime,
  capitalizeString,
  getOfferKeyword,
  presentPoint,
  futurePoint,
  pastPoint,
  sortPointByDay,
  sortPointByTime,
  isDatesEqual,
};
