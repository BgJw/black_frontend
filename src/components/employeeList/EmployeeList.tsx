
import { useAppSelector } from '@/app/hooks/store';
import s from './employeeList.module.scss';

interface IWorkTime {
    day: number,
    time: string
}
interface IEmployee {
    id: number,
    name: string,
    work: IWorkTime[]
}


const employee: IEmployee[] = [ {
    id: 12121,
    name: 'Bogdan',
    work: [
        {day: 2, time: '9-17'},
        {day: 3, time: '9-17'},
        {day: 4, time: '9-17'},
        {day: 5, time: '-'},
        {day: 6, time: '-'},
        {day: 11, time: '9-17'},
        {day: 12, time: '9-17'},
        {day: 18, time: '13-21'},
        {day: 19, time: '13-21'},
        {day: 20, time: '13-21'},
        {day: 21, time: '13-21'},
    ]
}, {
    id: 121212121,
    name: 'Gosia',
    work: [
        {day: 5, time: '13-21'},
        {day: 6, time: '13-21'},
        {day: 7, time: '13-21'},
        {day: 8, time: '13-21'},
        {day: 9, time: '9-17'},
        {day: 13, time: '9-17'},
        {day: 14, time: '9-17'},
        {day: 15, time: '9-17'},
        {day: 16, time: '9-17'},
        {day: 17, time: '-'},
        {day: 18, time: '-'},
        {day: 26, time: '9-17'},
        {day: 27, time: '9-17'},
    ]
},{
    id: 12121888,
    name: 'Ada',
    work: [
        {day: 5, time: '13-21'},
        {day: 6, time: '13-21'},
        {day: 7, time: '13-21'},
        {day: 8, time: '13-21'},
        {day: 9, time: '9-17'},
        {day: 11, time: '-'},
        {day: 12, time: '-'},
        {day: 21, time: '9-17'},
        {day: 22, time: '9-17'},
        {day: 23, time: '9-17'},
        {day: 24, time: '9-17'},
    ]
},{
    id: 121217721,
    name: 'Daniel',
    work: [
        {day: 1, time: '13-21'},
        {day: 2, time: '13-21'},
        {day: 3, time: '13-21'},
        {day: 4, time: '13-21'},
        {day: 16, time: '9-17'},
        {day: 17, time: '9-17'},
        {day: 18, time: '-'},
        {day: 19, time: '-'},
        {day: 27, time: '9-17'},
        {day: 28, time: '9-17'},
        {day: 29, time: '9-17'},
    ]
}];

interface IEmployeeList {
 day: number 
}


const EmployeeList = ({day}: IEmployeeList) => {
    const month = useAppSelector( store => store.scheduleSlice.month);
    const year = useAppSelector( store => store.scheduleSlice.year);


    const getDayOfWeek = ({day}: IEmployeeList) => {
        const date = new Date(year, month.numb - 1, day);
        const listDays = ["Niedziela", "Poniedzialek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
        return listDays[date.getDay()];
      };
    
    const dayOfWeek = getDayOfWeek({day});
    
    return (
        <>
        {
            employee.map( emplo => (
                day === 0 ?
                <div 
                    className={s.firstCell + ' cell'} 
                    key={emplo.id}>
                        { emplo.name }
                </div>
                : 
                (
                    <div 
                        className={'cell'}
                        style={ ['Sobota', 'Niedziela'].includes(dayOfWeek) ? {backgroundColor: 'yellow'}: {backgroundColor: 'white'} }
                        key={emplo.id}>
                            {
                                emplo.work.map( ({ day: workDay, time }) => (
                                    workDay === day && time
                            ))}
                    </div>
                )
            ))
        }
        </>
    );
};

export default EmployeeList;