import React, {useContext, useEffect, useState} from 'react';
import WithCalendarLayout from "../layout/WithCalendarLayout";
import DayView from "../components/DayView/DayView";
import BigCalendar from "../components/BigCalendar/BigCalendar";
import CalendarContext from "../context/CalendarContext";
import dayjs from "dayjs";
import axios from "axios";
import {useParams, useSearchParams} from "react-router-dom";
import eventData from "../../src/eventData";


const HomePage = () => {

    const {
        events,
        setEvents,
        setCalendarView,
        calendarView,
        setMonthIndex,
        setNewEventData
    } = useContext(CalendarContext)

    useEffect(() => {
        let currentMonthIndex = dayjs().month()
        setMonthIndex(currentMonthIndex)

        setEvents(eventData)


    }, [])

    let params = useParams()


    useEffect(() => {
        if (params.view === "month") {
            setCalendarView("month")
        } else if (params.view === "day") {
            setCalendarView("day")
        }
    }, [params])


    const [isOpenChooseEventModal, setOpenChooseEventModal] = useState(false)

    function openAddNewEventModal(eventType) {
        let now = dayjs()
        setNewEventData(prev => ({
            ...prev,
            isOpen: true,
            type: eventType,
            date: now.date(),
            monthIndex: now.month()
        }))
        setOpenChooseEventModal(false)
    }


    return (
        <div>
            {
                params.view !== "day"
                    ? <BigCalendar events={events}/>
                    : <DayView  events={events}/>
            }

        </div>
    );
};

export default WithCalendarLayout(HomePage);