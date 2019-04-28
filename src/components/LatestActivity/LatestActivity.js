import React from "react"

const LatestActivity = props => {
  return (
    <div>
      <h3>Latest Activity:</h3>
      <ul>
        {props.activity.map((item, i) => (
          <li style={{ marginTop: "1.5rem" }} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LatestActivity
