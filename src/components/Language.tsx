import React from 'react'
import {Box, Rating, Typography} from '@mui/material'
import { colors } from '../style/colors'
import { Circle, CircleOutlined } from '@mui/icons-material'

interface LanguageProps {
    language: string
    proficiency_label: string
    proficiency_value: number
}

export const Language:React.FC<LanguageProps> = (props) => {
    
    return (
        <Box sx={{justifyContent: 'space-between', flex: 1,alignItems: 'center' }}>
            <Typography sx={{fontFamily: 'Rubik', fontSize: '1.6vw', color: colors.secondary}}>{props.language}</Typography> 
            
            <Box sx={{alignItems: 'center', gap: '1vw'}}>
                <Typography sx={{ }}>{props.proficiency_label}</Typography>
                <Rating  value={props.proficiency_value} icon={<Circle color='primary' sx={{width: '1.2vw', height: 'auto'}} />} emptyIcon={<CircleOutlined color='primary' sx={{width: '1.2vw', height: 'auto'}}/>} readOnly />
            </Box>
        </Box>
    )
}