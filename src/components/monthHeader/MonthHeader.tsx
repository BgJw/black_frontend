import { useAppDispatch, useAppSelector } from "@/app/hooks/store";
import { nextMonth, prevMonth, resetMonth } from '../../../slices/scheduleSlice';

const MonthHeader = () => {
    const month = useAppSelector(store => store.scheduleSlice.month);
    const year = useAppSelector(store => store.scheduleSlice.year);
    const dispatch = useAppDispatch();

    return (
        <div className=" w-[80%] flex flex-col" >
            <div className="flex justify-between item-center">
                <button
                    className="hover:opacity-70"
                    onClick={() => dispatch(prevMonth())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-10 w-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <h1 className='font-bold uppercase'>Grafik na mięsiac {month.name + ' ' + year} </h1>
                <button
                    className="hover:opacity-70"
                    onClick={() => dispatch(nextMonth())}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" h-10 w-20">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-end items-end h-10">
                <button
                    className="hover:opacity-70"
                    onClick={() => dispatch(resetMonth())}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MonthHeader;