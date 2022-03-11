import React from 'react'
import { Card, CardContent, CardHeader, Grid, ImageList, ImageListItem, ImageListItemBar, SvgIcon, Typography } from '@mui/material'

export default function DetailCard({ details }) {
    return (
        <div>
            <Card>
                <CardHeader 
                title={details.title}
                />
                <CardContent>
                    <Grid container>
                        <Grid item sm={6}>
                            <Typography>
                                {details.description}
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <ImageList>
                                {details.technologies.map((technology) => 
                                    <ImageListItem key={technology.name}>
                                        <img src={technology.img} alt={technology.name} style={{ width: "100%", maxHeight: 30, objectFit: "contain" }} />
                                        <ImageListItemBar title={technology.name} position="below" align="center" />
                                    </ImageListItem>
                                )}
                            </ImageList>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent>
                    <Grid container spacing={2}>
                        {details.links.map((link) => 
                            <Grid item key={link.name}>
                                <a href={link.url}>
                                    <SvgIcon component={link.icon} />
                                </a>
                                <Typography>
                                    {link.name}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}