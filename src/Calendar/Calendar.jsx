import React, {useContext, useEffect, useState} from 'react';
import CalendarContext from "../context/CalendarContext";
import dayjs from "dayjs";
import axios from "axios";
import CalendarSidebar from "../components/CalendarSidebar/CalendarSidebar";
import Header from "../components/Header/Header";
import {useNavigate, useSearchParams} from "react-router-dom";
import {toast} from "react-toastify";
import eventData from "../../src/eventData";
// open update event when click on event name
export function clickOnEventName(evt, monthIndex, events, setNewEventData) {

    let updatedEvent = events.find(event => event._id === evt._id)

    if (updatedEvent) {

        let isAllDay = false


        let startDateTime = new Date(updatedEvent.start)
        let endDateTime = new Date(updatedEvent.end)


        if(startDateTime.getDate() === endDateTime.getDate()
            && ((endDateTime.getHours() - startDateTime.getHours()) === 23)
            && ((endDateTime.getMinutes() - startDateTime.getMinutes()) === 59)
            && (endDateTime.getMinutes() - startDateTime.getMinutes()) === 59)
        {
            isAllDay = true
        }

        setNewEventData(prev => ({
            ...prev,
            title: updatedEvent.title,
            isOpen: true,
            isAllDay,
            updateEventId: evt._id,
            date: new Date(),
            selectedDate: updatedEvent.date ? new Date(updatedEvent.date) : new Date(),
            startDateTime: updatedEvent.start ? new Date(updatedEvent.start) : new Date(),
            endDateTime: updatedEvent.end ? new Date(updatedEvent.end) : new Date(),
            monthIndex: monthIndex,
            status: updatedEvent.status,
            eventColor: updatedEvent.eventColor,
        }))
    } else {
        alert("not found updated event item")
    }
}


const Calendar = ({pageContent}) => {

    const {events,
        setFilterEvent,
        filterEvents,
        newEventData, setCalendar, setCloseNewEventModal, setEvents, setMonthIndex, setNewEventData} = useContext(CalendarContext)
    
    const  [urlSearchParams] = useSearchParams()
    let eventId = urlSearchParams.get("detail")
    
    const navigate = useNavigate()
    
    useEffect(() => {
        let currentMonthIndex = dayjs().month()
        setMonthIndex(currentMonthIndex)
        setEvents(eventData)
    }, [])

    const [eventDetail, setEventDetail] = useState(null)
    
    useEffect(()=>{
        if(events.length > 0 && eventId){
            let eventDetail = events.find(evt=>evt._id === eventId)
            setEventDetail(eventDetail)
        }
    
    }, [events, eventId])
    

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

    function handleClose() {
        setCloseNewEventModal()
    }
    
    // function handleSetCalendarView(){
    //
    // }
    
    function handleCloseEventDetail(){
        setEventDetail(null)
        navigate("/month")
    }

    return (
        <div className="my-container">
            <Header/>            
            <div className="flex ">
                <CalendarSidebar
                    setCalendar={setCalendar}
                    events={events}
                    openAddNewEventModal={openAddNewEventModal}
                    isOpenChooseEventModal={isOpenChooseEventModal}
                    setOpenChooseEventModal={setOpenChooseEventModal}
                    setFilterEvent={setFilterEvent}
                    filterEvents={filterEvents}
                />
                <div className="w-full">
                    {pageContent}
                </div>
            </div>

        </div>
    );
};

export default Calendar;