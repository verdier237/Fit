import React from 'react'

const Userview = (props) => {
    const data = props.data
  return (
    <div className="message flex mb-4 justify-end">
    <div className="mr-4 bg-blue-200 p-3 rounded-lg">
        <p className="text-sm ">{data}</p>
    </div>
    <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 break-words"></div>
</div>
  )
}

export default Userview