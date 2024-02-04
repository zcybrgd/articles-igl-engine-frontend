import React, { useRef, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/light.css';

/**
 * DatePicker component for selecting a date, triggering the `onDateSelect` callback with the selected date.
 *
 * @component
 * @param {Object} props
 * @param {Function} props.onDateSelect 
 * @returns {JSX.Element} 
 */
const DatePicker = ({ onDateSelect }) => {
    const inputRef = useRef();

    useEffect(() => {
        /**
         * Configures a datepicker using flatpickr for selecting a date.
         *
         * @constant
         * @type {Object}
         * @property {string} dateFormat 
         * @property {string} altFormat 
         * @property {boolean} altInput 
         * @property {string} altInputClass
         * @property {Function} onClose 
         */
        const datepicker = flatpickr(inputRef.current, {
            dateFormat: 'd.m.Y',
            altFormat: 'd\t\tm\t\tY',
            altInput: true,
            altInputClass: 'cursor-pointer text-lg text-center font-dmsansbold bg-[#292929] text-[#EBEBEB] rounded-xl focus:outline-none',
            onClose: (selectedDates) => {
                const selectedDate = selectedDates[0];
                onDateSelect(selectedDate);
            },
        });

        return () => {
            datepicker.destroy();  //to clean the flatpickr
        };
    }, [onDateSelect]);

    return (
        <div className="flex flex-col relative cursor-pointer text-lg text-start font-dmsansbold bg-[#292929] text-[#EBEBEB] placeholder-[#EBEBEB] focus:outline-none rounded-xl py-1">
            <input
                ref={inputRef}
                type="text"
                className="hidden" // Hide the original input
            />
            <label className="-mt-3 text-[8px] font-dmsanslight text-[#EBEBEB] cursor-pointer">
                <span className='ml-[40px]'>DD</span>
                <span className='ml-[40px]'>MM</span>
                <span className='ml-[45px]'>YYYY</span>
            </label>
        </div>
    );
};

export default DatePicker;
