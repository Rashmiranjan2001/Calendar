import React, { useEffect, useState } from "react";
import { plus } from "../../icons/plus";
import "./calendarSidebar.css";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import Accordion from "../Accordion/Accordion";
import statusColors from "../../utils/statusColors";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import rightArrow from "../../assets/right-arrow.png";
import downArrow from "../../assets/downarrow.png";
import plusArrow from "../../assets/plus.png";

const CalendarSidebar = (props) => {
  const {
    openAddNewEventModal,
    isOpenChooseEventModal,
    setOpenChooseEventModal,
    events,
    setCalendar,
    setFilterEvent,
    filterEvents,
  } = props;

  const navigate = useNavigate();
  const [expandItems, setExpandItems] = useState([1, 2]);
  const [invitedMe, setInvitedMe] = useState([]);
  const [myCreatedEvent, setMyCreatedEvent] = useState([]);
  const [accItemShowContentLen, setAccItemShowContentLen] = useState({
    1: 5,
    2: 10,
  });

  function handleToggle(id) {
    if (expandItems.includes(id)) {
      setExpandItems(expandItems.filter((i) => i !== id));
    } else {
      setExpandItems([...expandItems, id]);
    }

    setAccItemShowContentLen((prev) => ({
      ...prev,
      [id]: accItemShowContentLen[id],
    }));
  }

  function handleExpandAccContent(e, id, len) {
    e.stopPropagation();

    if (accItemShowContentLen[id] !== len) {
      setAccItemShowContentLen((prev) => ({
        ...prev,
        [id]: len,
      }));
    } else {
      setAccItemShowContentLen((prev) => ({
        ...prev,
        [id]: 10,
      }));
    }
  }

  function sortByStatusPending(arr) {
    return arr;
  }

  function sortByDate(arr) {
    arr.sort((a, b) => {
      let aDate = new Date(a.start);
      let bDate = new Date(b.start);
      return bDate - aDate;
      if (aDate < bDate) {
        return 1;
      } else if (aDate > bDate) {
        return -1;
      } else {
        return 0;
      }
    });
    return arr;
  }

  function handleChangeDateOnSmallCalendar(date) {
    let d = dayjs(date);
    setCalendar({
      selectedDate: date,
    });
    navigate(`/day?date=` + d.format("MM-DD-YYYY"));
  }

  function handleChangeFilterEvent(status) {
    setFilterEvent(status);
  }

  return (
    <div className="sidebar">
      <div className="calendar-page relative">
        <button
          className="btn flex items-center  mt-4 add-new-btn"
          onClick={() => openAddNewEventModal("event")}
        >
          <span className="mr-4 font-medium text-sm">New Event</span>
          <img
            src={plusArrow}
            alt="My Image"
            className="smallImage"
          />
        </button>
      </div>

      <div className="sidebar-scroll">
        <SmallCalendar onChange={handleChangeDateOnSmallCalendar} />
        <br />
        <br />
        <br />
        <Accordion openIds={expandItems}>
          <Accordion.Item
            dataId={1}
            header={(isOpen) => (
              <div
                className="accordion-header flex items-center justify-between"
                onClick={() => handleToggle(1)}
              >
                <h4 className="">My Calendar</h4>
                {isOpen ? (
                  <img src={downArrow} alt="My Image" className="smallImage" />
                ) : (
                  <img src={rightArrow} alt="My Image" className="smallImage" />
                )}
              </div>
            )}
          >
            <div className="accordion-content">
              {Object.keys(statusColors).map((status) => (
                <div className="flex items-center gap-x-1 mb-1">
                  <input
                    onChange={() => handleChangeFilterEvent(status)}
                    checked={filterEvents.includes(status)}
                    type="checkbox"
                    id={status}
                    name={status}
                  />
                  <label
                    className="text-sm font-normal px-2 rounded py-px text-gray-900 hover:bg-gray-100 capitalize "
                    style={{ color: statusColors[status] }}
                    htmlFor={status}
                  >
                    {status === "proposedTime" ? "Proposed New Time" : status}
                  </label>
                </div>
              ))}
            </div>
          </Accordion.Item>

          <Accordion.Item
            dataId={2}
            header={(isOpen) => (
              <div
                onClick={() => handleToggle(2)}
                className="accordion-header flex items-center justify-between"
              >
                <h4 className="">My Events</h4>
                {isOpen ? (
                  <img src={downArrow} alt="My Image" className="smallImage" />
                ) : (
                  <img src={rightArrow} alt="My Image" className="smallImage" />
                )}
              </div>
            )}
          >
            <div className="accordion-content">
              {sortByDate(events)
                .slice(0, accItemShowContentLen[2])
                .map((evt) => (
                  <div className="accordion-li mt-1 " key={evt._id}>
                    <h4 className="flex items-center">
                      <div className="col-span-1">
                        <div
                          style={{
                            background:
                              evt.eventColor || statusColors[evt.status],
                          }}
                          className="w-3 h-3 rounded-full block"
                        ></div>
                      </div>
                      <div className="ml-1">
                        <span className="accordion-content-title text-sm  px-1 rounded py-px text-gray-700 hover:bg-gray-100">
                          {evt.title}
                        </span>
                      </div>
                    </h4>
                  </div>
                ))}

              {/*** Toggle expand / Collapse button ****/}
              {events.length > 10 && (
                <div
                  className="accordion-li  hover:bg-blue-100 p-1 rounded"
                  onClick={(e) => handleExpandAccContent(e, 2, events.length)}
                >
                  <div className="ml-4 flex items-center justify-between">
                    <label htmlFor="" className="font-medium">
                      Show{" "}
                      {accItemShowContentLen[2] !== events.length
                        ? " more"
                        : " less"}
                    </label>
                    <img src={downArrow} alt="My Image" className="smallImage" />
                  </div>
                </div>
              )}
            </div>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default CalendarSidebar;
