

import s from './list.module.scss';


const headerList = ['/', 'Data przyjęcia', 'Co przyjęte', 'Nr klienta', 'Kto przyjąl', 'Ile do zaplaty', 'Zaplacone?', 'Karta/Got', 'Waga', 'Kto zrobił?', 'Godzina'];

const List = () => {
    return (
        <div className={s.wrap + " flex-col items-center"}>
            <div className={'flex justify-around items-center h-[35px] w-[100%] border border-black'}>
                <button
                    className="hover:opacity-70"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" h-5 w-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <span className='text-lg font-semibold'>Poniedzialek 09.10</span>
                <button
                    className="hover:opacity-70"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" h-5 w-10">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>  
            <ul className='flex'>
                {
                    headerList.map( el => (
                        <li>{el}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default List;