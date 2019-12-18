import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

interface IProps {
    title: string
    explain: string
    imgUrl: string
    onClick: () => void
}

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 20
    },
    media: {
        height: 140,
    },
});

const MediaCard = (props: IProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <ButtonBase onClick={props.onClick}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.imgUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom={true} variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.explain}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </ButtonBase>
        </Card>
    )


}

export default MediaCard