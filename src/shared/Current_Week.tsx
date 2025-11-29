// import { useState, useEffect } from 'react';
import { getISOWeek } from 'date-fns';

//
// Определяет, какая сейчас неделя (четная или нечетная)
//

export default function getCurrentWeek(): 'Четная' | 'Нечетная' {
  const today = new Date();
  const week = getISOWeek(today);
  return week % 2 === 0 ? 'Нечетная' : 'Четная';
}