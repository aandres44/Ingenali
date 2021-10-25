import React from 'react'
import { Clients } from './Clients/Clients'
import { Company } from './Company/Company'
import { Home } from './Home/Home'
import { Service2 } from './Services/Service2/Service2'

export const Main = () => {
    return (
        <>
            <Home />
            <Company />
            <Clients />
            <Service2 />
        </>
    )
}
