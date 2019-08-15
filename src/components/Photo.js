import React from "react"

const Photo = ({ src, alt }) => (
    <li>
        <img src={src} alt={alt} />
    </li>
)

export default Photo