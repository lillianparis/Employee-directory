import React from "react";

function Table(props) {

    return (

    <table className="table table-hover" style={{width: '50%', margin: '0 auto'}}>
    <thead>
        <tr>
            <th scope="col">Name <span className=''><svg className="" onClick={() => {props.setSort(!props.sort)}} width="1rem" height="1rem" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span></th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Picture</th>
        </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
</table>
)

}

export default Table;
