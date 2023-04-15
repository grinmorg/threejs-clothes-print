import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const CameraRig: FC<Props> = ({ children }) => {
  return (
    <div>{children}</div>
  )
}

export default CameraRig