import React, { useState, createContext  } from "react";


export const Context = createContext(null)
    const UserProvider = ({children}) => {
        const [calendar, SetCalendar ] = useState('<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&showDate=1&showCalendars=0&mode=WEEK&title=Turnos&src=cHJzZTNrNnZwcW5jdHFhY3ZvZzVrNW9vcDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>');
        const [turnero, SetTurnero ] = useState('https://google.com.ar')
        return(
            <Context.Provider value={{turnero, SetTurnero}}>
                {children}
            </Context.Provider>
        )
    }

export default UserProvider