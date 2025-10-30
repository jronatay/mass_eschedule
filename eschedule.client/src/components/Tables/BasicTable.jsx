import React from 'react'

export default function BasicTable({items}) {

  return (
    <>
     <table>
        <slot name="thead"/> 
        <slot items={items} />
         <slot name="thead"/> 
    </table>
    </>
  )
}
