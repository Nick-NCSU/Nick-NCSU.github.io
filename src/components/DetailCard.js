import React from 'react';
import { Card, CardContent, CardHeader, Container, Grid, Tooltip, Typography } from '@mui/material';
import { GitHub, Link } from '@mui/icons-material';

export default function DetailCard({ details }) {
    return (
        <Card variant='outlined' className="detail-card">
            <CardHeader 
                title={details.title}
                className="card-header"
            />
            <CardContent className="card-content">
                <Typography variant="body1" className="description">
                    {details.description}
                </Typography>
                <Grid marginTop='25px' container justifyContent="space-between">
                    <Grid item>
                        <div className="technologies-container">
                            {details.technologies.map((technology, index) => (
                                <div key={index} className="technology">
                                    <Tooltip title={technology.name}>
                                        <img src={technology.img} alt={technology.name} className="technology-img" />
                                    </Tooltip>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid display='flex' justifyContent='center' item>
                        <div className="links-container">
                            {details.links.map((link, index) => (
                                <a key={index} href={link.url} className="link">
                                    {link.icon === Link ? <Link className="link-icon" /> : <GitHub className="link-icon" />}
                                    <Typography variant="body2" className="link-text">
                                        {link.name}
                                    </Typography>
                                </a>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
