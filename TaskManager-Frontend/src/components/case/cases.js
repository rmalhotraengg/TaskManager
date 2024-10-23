import { useState } from "react"
import { Case } from "./case";
import { useSelector } from "react-redux";
import "./cases";

export const Cases = (props) => {
    const cases = useSelector(state => state.cr.cases); 

    return (
        <div className="cases" style={{ border: "1px solid white" }} >
            {cases.map((item,index) => {
                return <Case key={index} item={item} handleOpenTasks={(caseId)=>props.handleOpenTasks(caseId)} />
            })}
        </div>
    )
}