import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardMedia, CardContent, Typography, Tabs, Tab } from '@mui/material';
// import { Rotate90DegreesCcw } from '@material-ui/icons';
import './page.css'

const useStyles = makeStyles({
    root: {
        maxWidth: '90%',
        margin: 'auto',
        borderRadius: 10,
        backgroundColor: '#343443',
    },
    media: {
        height: 140,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    link: {
        position: 'absolute',
        left: '0',
    },
});



const BannerCard = ({ img, href, TabText, Child }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="z-10 bg-black p-4">
            <Card className={`${classes.root}  bg-gray-800`}>
                <CardMedia className={classes.media} image={img} title="Banner Image">
                    <div className={`${classes.link}  text-white`}>
                        <i className="fas fa-link"></i>
                    </div>
                </CardMedia>
                <CardContent>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {TabText.map((text, index) => (
                            <Tab
                                key={index}
                                label={text}
                                style={{ color: 'white' }}
                                // icon={<Rotate90DegreesCcw style={{ color: 'white' }} />}
                                className="border border-gray-800"
                            />
                        ))}
                    </Tabs>
                </CardContent>
            </Card>
            {/* render the component based on the value state variable */}
            {Child[value]}
        </div>
    );
};

export default BannerCard;