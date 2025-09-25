import React from 'react'
import {Box, type SxProps} from '@mui/material'
import { SectionTitle } from '../SectionTitle'

interface SectionWrapperProps {
    children: React.ReactNode
    title: string
    style?: SxProps
}

export const SectionWrapper:React.FC<SectionWrapperProps> = (props) => {
    
    return (
        <Box sx={{flexDirection: 'column', gap: '1vw', ...props.style}}>
            <SectionTitle title={props.title} />
            {props.children}
        </Box>
    )
}