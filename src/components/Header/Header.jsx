import React, { useContext, useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiInfoCircle,
  BiSearch,
  BsGear,
  FaSignInAlt,
  FaSignOutAlt,
  HiBars3,
  MdDashboard,
} from "react-icons/all";
import CalendarContext from "../../context/CalendarContext";
import dayjs from "dayjs";
import Select from "../Form/Select";
import { Link, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const {
    monthIndex,
    selectedDate,
    setMonthIndex,
    date,
    setCalendar,
    setCalendarView,
    calendarView,
  } = useContext(CalendarContext);

  const navigate = useNavigate();

  function jumpNextMonth() {
    let updateSelectedDate = new Date(selectedDate);
    if (view === "day") {
      updateSelectedDate.setDate(selectedDate.getDate() + 1);
      let dd = dayjs(updateSelectedDate).format("MM-DD-YYYY");
      navigate(`/day?date=` + dd);
    } else {
      updateSelectedDate.setMonth(updateSelectedDate.getMonth() + 1);
    }
    setCalendar({
      selectedDate: updateSelectedDate,
    });
  }

  function jumpPrevMonth() {
    let updateSelectedDate = new Date(selectedDate);
    if (view === "day") {
      updateSelectedDate.setDate(selectedDate.getDate() - 1);
      let dd = dayjs(updateSelectedDate).format("MM-DD-YYYY");

      setCalendar({
        selectedDate: updateSelectedDate,
      });
      navigate(`/day?date=` + dd);
    } else {
      updateSelectedDate.setMonth(updateSelectedDate.getMonth() - 1);
    }

    setCalendar({
      selectedDate: updateSelectedDate,
    });
  }

  function resetDate() {
    let now = new Date();
    setCalendar({
      selectedDate: now,
    });
    if (view === "day") {
      let dd = dayjs(now).format("MM-DD-YYYY");
      navigate(`/day?date=` + dd);
    }
  }

  function handleChangeCalendarView(componentName) {
    setCalendarView(componentName);
    navigate("/" + componentName);
  }

  const params = useParams();
  let view = params.view || "month";

  return (
    <header className="flex justify-between py-3 px-3 items-center border-b">
      <HiBars3 className="bar-icon" fontSize={20} />

      <div className="flex items-center gap-x-1">
        <Link to="/">
          <div className="flex items-center gap-x-1 ">
            <h4 className="hidden md:block text-sm font-bold">Calendar by</h4>
          </div>
          <h5 className="hidden md:block text-sm font-bold">Rashmiranjan</h5>
        </Link>
        <div className="col-span-10 flex items-center ml-2 md:ml-6 lg:ml-10 gap-x-1 md:gap-x-4">
          <button className="btn" onClick={resetDate}>
            Today
          </button>

          <div className="flex items-center gap-x-2">
            <li
              className="btn btn-circle list-none text-2xl"
              onClick={jumpPrevMonth}
            >
              <BiChevronLeft />
            </li>
            <li
              className="btn btn-circle list-none text-2xl"
              onClick={jumpNextMonth}
            >
              <BiChevronRight />
            </li>
          </div>

          {/***** selected date *****/}
          <div>
            <h4 className="font-semibold whitespace-nowrap">
              {dayjs(new Date(selectedDate)).format(
                view === "day" ? "MMMM DD YYYY" : "MMMM YYYY"
              )}
            </h4>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-2 md:gap-x-8 col-span-6">
        <div className="flex items-center gap-x-2 md:gap-x-4   col-span-6">
          <li className="list-none text-2xl">
            <BiSearch className="text-gray-700" />
          </li>

          <li className="list-none text-xl">
            <BiInfoCircle className="text-gray-700" />
          </li>
          <li className="list-none text-xl">
            <BsGear className="text-gray-700" />
          </li>
        </div>

        <Select
          withBg={true}
          value={calendarView}
          dropdownClass=""
          onChange={handleChangeCalendarView}
          renderPlaceholderValue={(v) => <span>{v.toUpperCase()}</span>}
          render={(click) => (
            <div>
              <li onClick={() => click("day")} className="mui-select-item">
                Day
              </li>
              <li onClick={() => click("month")} className="mui-select-item">
                Month
              </li>
            </div>
          )}
        ></Select>

        <li>
          {
            <Link>
              <FaSignInAlt className="text-sm text-gray-700" />
            </Link>
          }
        </li>
      </div>
    </header>
  );
};

export default Header;
