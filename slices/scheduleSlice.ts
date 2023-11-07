import { createSlice } from "@reduxjs/toolkit";

const monthNames = [
    "Styczeń", "Luty", "Marzec", "Kwiecień",
    "Maj", "Czerwiec", "Lipiec", "Sierpień",
    "Wrzesień", "Październik", "Listopad", "Grudzień"
];
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
const daysArray = Array.from({ length: daysInMonth + 1 }, (_, index) => index);


interface ScheduleSlice {
    dayList: number[],
    year: number,
    month: {
        name: string,
        numb: number
    },

}


const initialState: ScheduleSlice = {
    dayList: daysArray,
    month: {
        name: monthNames[currentMonth],
        numb: currentMonth,
    },
    year: currentYear
};


const ScheduleSlice = createSlice({
    name: 'scheduleSlice',
    initialState,
    reducers: {
        nextMonth: (state) => {
            const newMonthNumb = state.month.numb < 11 ? state.month.numb + 1 : 0;
            const newYear = state.month.numb === 11 ? state.year + 1 : state.year;
            const daysInMonth = new Date(newYear, newMonthNumb, 0).getDate();
        
            return {
                ...state,
                month: {
                    name: monthNames[newMonthNumb],
                    numb: newMonthNumb,
                },
                year: newYear,
                dayList: Array.from({ length: daysInMonth + 1 }, (_, index) => index),
            };
        },
        prevMonth: (state) => {
            const newMonthNumb = state.month.numb > 0 ? state.month.numb - 1 : 11;
            const newYear = state.month.numb === 0 ? state.year - 1 : state.year;
            const daysInMonth = new Date(newYear, newMonthNumb, 0).getDate();
        
            return {
                ...state,
                month: {
                    name: monthNames[newMonthNumb],
                    numb: newMonthNumb,
                },
                year: newYear,
                dayList: Array.from({ length: daysInMonth + 1 }, (_, index) => index),
            };
        },
        resetMonth: (state) => {
            return {
                ...state,
                   dayList: daysArray,
                    year: currentYear,
                    month: {
                        name: monthNames[currentMonth],
                        numb: currentMonth
                    }
            }
        },
    }

});

export const { prevMonth, nextMonth, resetMonth} = ScheduleSlice.actions;

export default ScheduleSlice.reducer;