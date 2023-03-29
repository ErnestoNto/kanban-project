import React from 'react'

import * as C from './CollunCreator'

const CollunCreator = ({createCollun}) => {
  return (
    <C.Container>
      <C.ButtonCreator onClick={createCollun}>Criar Coluna</C.ButtonCreator>
    </C.Container>
  )
}

export default CollunCreator
