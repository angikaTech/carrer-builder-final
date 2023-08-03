import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const {getRootProps, getInputProps} = useDropzone({noClick: true})

  return (
    <label {...getRootProps()}>
      <input {...getInputProps()} />
    </label>
  )
}

