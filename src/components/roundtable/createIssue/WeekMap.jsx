import React from 'react'

export const WeekMap = ({publishDate, setPublishDate, day}) => {
    return (
        <>
            <li 
            className={publishDate === day ? "done" : ""}
            onClick={() => {
                setPublishDate(day)
            }}>{day === 1 ? `1 day` : day === 7 ? `1 week` : `${day} days`}</li>
        </>
    )
}