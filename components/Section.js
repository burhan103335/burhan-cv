import React from 'react'

const Section = ({ id, title, content }) => {
  return (
    <section id={id} style={{ padding: '50px 0', background: '#f4f4f4', margin: '20px 0' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  )
}

export default Section
