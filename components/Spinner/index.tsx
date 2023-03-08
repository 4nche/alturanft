import React from 'react'

/**
 * spinner code has been copied from https://codepen.io/psychodev_/pen/wvyeZJO
 */

interface Props {
  scale?: number
  loading: boolean
}
function Spinner(props: Props) {

  const styleProps = props.scale ? {
    transform: `scale(${props.scale})`,
  } : {}

  return (
    <div className="container-spinner" style={{
      ...styleProps,
      opacity: props.loading ? 1 : 0,
    }}>
      <div className="spinner center">
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
      </div>
    </div>
  )
}

export default Spinner
