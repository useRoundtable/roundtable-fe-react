import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

export const RenderMarkdown = ({source}) => {
    const types = ["root","list", "text", "paragraph", "listItem","strong", "heading", "linkReference"]
    return (
        <ReactMarkdown source={source} escapeHtml={false} allowedNode={types}/>
    )
}