import { useAppSelector } from '@/app/hooks/store';
import s from './dayCell.module.scss';


interface IDayCell {
    day: number,
}


const DayCell = ({ day }: IDayCell) => {
    const month = useAppSelector( store => store.scheduleSlice.month);
    const year = useAppSelector( store => store.scheduleSlice.year);


    const getDayOfWeek = ({day}: IDayCell) => {
        const date = new Date(year, month.numb - 1, day);
        const listDays = ["Niedziela", "Poniedzialek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
        return listDays[date.getDay()];
      };
    
    const dayOfWeek = getDayOfWeek({day});
      
    return (
        <>
            {
                day === 0 ?
                    <div className={s.firstCell + ' cell'}>
                        <span>Data</span>
                        <hr />
                        <span>Pracownik</span> 
                    </div>
                    :
                    <div 
                        className={s.cell + ' cell'}
                        style={ ['Sobota', 'Niedziela'].includes(dayOfWeek) ? {backgroundColor: 'yellow'}: {backgroundColor: 'white'} }>
                        {day + '.' + (month.numb + 1) + ' ' + dayOfWeek}
                    </div>
            }
        </>
    );
};

export default DayCell;