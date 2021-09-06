import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={54}
      height={54}
      viewBox="0 0 54 54"
      {...props}
    >
      <defs>
        <style>{'.a{fill:#00ebc7}'}</style>
      </defs>
      <path
        className="a"
        d="M879.869-578.58q0 6.44-2.742 9.4-2.9 3.124-9.564 3.124v-3.794q4.4 0 6.328-2.024t1.929-6.385v-6.312h-10.106v18.522h-3.921v-22.38h18.076z"
        transform="translate(-844 604)"
      />
      <path
        className="a"
        d="M871-599a22 22 0 00-15.556 37.556 22 22 0 1031.112-31.112A21.856 21.856 0 00871-599m0-5a27 27 0 11-27 27 27 27 0 0127-27z"
        transform="translate(-844 604)"
      />
    </svg>
  )
}

export default SvgComponent
