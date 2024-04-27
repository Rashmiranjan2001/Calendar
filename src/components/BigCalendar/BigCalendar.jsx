import React, {useContext, useEffect, useState} from 'react';
import CalendarContext from "../../context/CalendarContext";
import dayjs from "dayjs";
import getMonthDayMartix from "../../utils/getMonthDayMartix";
import statusColors from "../../utils/statusColors";
import withPreventDefault from "../../utils/withStopPropagation";
import withStopPropagation from "../../utils/withStopPropagation";
import {clickOnEventName} from "../../Calendar/Calendar";
import {useNavigate} from "react-router-dom";
import getDayClass from "../../utils/getDayClass.js";
import {toast} from "react-toastify";


import "./big-calendar.scss"


const BigCalendar = (props) => {

    const {events} = props

    const {
        selectedDate,
        setNewEventData,
        currentDate,
        monthIndex,
        setCloseNewEventModal,
        addEvent,
        filterEvents
    } = useContext(CalendarContext)



    let weeks = [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ]

    const navigate = useNavigate()

    const [daysMatrix, setDaysMatrix] = useState(getMonthDayMartix(selectedDate))

    const [daySelected, setDaySelected] = useState(dayjs().month(monthIndex))

    const [isShowAllEventDate, setShowAllEventDate] = useState(null)

    useEffect(() => {
        setDaysMatrix(getMonthDayMartix(selectedDate))
    }, [selectedDate]);


    function handleSelectDate(day) {
        setDaySelected(day)
    }

    function handleClickOnDate(date) {
        let d = date.format("MM-DD-YYYY")
        navigate(`/day?date=` + d)
    }

    function clickOnCell(day, monthIndex) {
        setCloseNewEventModal()
        let startDateTime = day.toDate()
        let endDateTime = new Date(startDateTime)
        endDateTime.setMinutes(30)

        setNewEventData(prev => {
            let newEvent = {
                ...prev,
                title: "",
                isOpen: true,
                isEventCreateInitialize: true,
                startDateTime: startDateTime,
                start: new Date(startDateTime).toISOString(),
                end: new Date(endDateTime).toISOString(),
                endDateTime: endDateTime,
                monthIndex: monthIndex,
            }

            // add new event entry
            addEvent({
                _id: "000000000000000000000000",
                ...newEvent,
                status: "pending"
            })

            return newEvent
        })

    }

    function handleClickOnEventName(evt, monthIndex) {
        clickOnEventName(evt, monthIndex, events, setNewEventData)
    }

    function handleShowAllEvent(e, eventDate) {
        e.stopPropagation();
        setShowAllEventDate(prev => prev === eventDate ? null : eventDate)
    }


    function renderEvents(day, monthIndex) {

        const eventGroupByDate = {}
        events.filter(e => filterEvents.includes(e.status)).forEach(event => {
            let eventDate = dayjs(new Date(event.start)).format("DD/MM/YYYY")
            if (eventGroupByDate[eventDate]) {
                eventGroupByDate[eventDate].push(event)
            } else {
                eventGroupByDate[eventDate] = [event]
            }
        })



        return Object.keys(eventGroupByDate).map(eventDate => {
            let more = 0
            if (eventGroupByDate[eventDate].length >= 4) {
                more = (eventGroupByDate[eventDate].length) - 4;
            }
            return (
                eventDate === day.format("DD/MM/YYYY") && (
                    <div key={eventDate}>
                        {
                            eventGroupByDate[eventDate].slice(0, 4).map(evt => (
                                <div
                                    key={evt._id}
                                    onClick={(e) => withPreventDefault(e, handleClickOnEventName(evt, monthIndex))}
                                    className="event-name"
                                    style={{background: evt.eventColor || statusColors[evt.status]}}
                                >
                                    {evt.title}
                                </div>
                            ))
                        }
                        {more > 0 && (
                            <div className="relative">
                                <div onClick={(e) => handleShowAllEvent(e, eventDate)}
                                     className="event-name see-more-btn w-max"> {more} more...
                                </div>
                            </div>
                        )}
                    </div>
                )
            )
        })
    }


    let weekDay = {
        6: "rgba(255,77,77,0.15)",
        0: "rgba(90,163,255,0.15)",
    }

    return (
        <div>
            <div className="mt-5 w-full p-2 rounded-xl big-calendar">
                <div>
                    <div className="grid grid-cols-7 day-row">
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} style={{background: weekDay[weekIndex]}} className="big-date">
                                <span className="big-date-cell">{week}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 grid-rows-6">
                        {daysMatrix.map((row) => (
                            row.map((day, dayIndex) => (
                                <div style={{background: weekDay[dayIndex]}} key={day.date()}
                                     onClick={() => clickOnCell(day, monthIndex)}
                                     className={`big-date py-1 ${getDayClass(day, selectedDate)} `}>
                                    <span onClick={(e) => withStopPropagation(e, handleClickOnDate(day))}
                                          className="big-date-cell">{day.format("D")}
                                    </span>
                                    <div className="event-list">
                                        {renderEvents(day, monthIndex)}
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BigCalendar;
