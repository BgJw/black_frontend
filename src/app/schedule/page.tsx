'use client';

import DayCell from '@/components/dayCell/DayCell';
import EmployeeList from '@/components/employeeList/EmployeeList';
import MonthHeader from '@/components/monthHeader/MonthHeader';


import { useAppSelector } from '../hooks/store';

import s from './shedule.module.scss';

const Schedule = () => {
    const dayList = useAppSelector(store => store.scheduleSlice.dayList);


    return (
        <div className={s.wrap + " flex-col items-center"}>
            <MonthHeader />
            <ul className={s.list}>
                {
                    dayList.map(day => (
                        <li className='flex' key={day}>
                            <DayCell day={day} />
                            <EmployeeList day={day} />
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Schedule;