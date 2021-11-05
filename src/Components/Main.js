import React from 'react'
import { Footer } from '../Footer/Footer'
import { Clients } from './Clients/Clients'
import { Company } from './Company/Company'
import { FormLead } from './FormLead/FormLead'
import { Home } from './Home/Home'
import { Service1 } from './Services/Service1'
import { Service2 } from './Services/Service2'
import { Service3 } from './Services/Service3'
import { Service4 } from './Services/Service4'
import { Service5 } from './Services/Service5'
import { Title } from './Services/Title'
import { Team } from './Team/Team'

export const Main = () => {
    return (
        <>
            <Home />
            <Company />
            <Clients />
            <Title />
            <Service1 />
            <Service2 />
            <Service3 />
            <Service4 />
            <Service5 />
            <Team />
            <FormLead />
            <Footer />
        </>
    )
}
