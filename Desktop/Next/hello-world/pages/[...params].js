import React from 'react'
import { useRouter } from 'next/router';

const CatchAll = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params)
  if(params.length === 1) {
    return (
        <div>Viewing {params[0]}</div>
    )
  } if(params.length === 2) {
    return <div>Viewing {params[0]} of {params[1]}</div>
  }
  return (
    <div>Viewing docs</div>
  )
}

export default CatchAll