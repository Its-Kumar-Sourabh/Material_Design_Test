/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import AppBar from 'material-ui/AppBar';
import Main from './Main'; // Our custom react component
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';

const styles = {
    headline: {
        fontSize: 18,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    headStyle: {
        backgroundColor: '#48C9B0'
    },
    buttonStyle: {
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        marginLeft: '80px',
    }
};


class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.state = {
            open: false,
        };
    }
    handleRequestClose() {
        this.setState({
            open: false,
        });
    }
    handleTouchTap() {
        this.setState({
            open: true,
        });
    }
    handleActive(tab) {
        alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
    }
    render() {
        const standardActions = (
            <FlatButton
                label="Yes"
                primary={true}
                onTouchTap={this.handleRequestClose}
            />
        );
        return (
            <div style={styles.container}>
                <AppBar
                    style={styles.headStyle}
                    title="05-April-2017"
                >
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    >
                        <Link to="about" ><MenuItem primaryText="About" /> </Link>
                        <Link to="contacts" ><MenuItem primaryText="Contacts" /></Link>
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Help" />
                        <MenuItem primaryText="Sign out" />
                    </IconMenu>
                </AppBar>
                <Tabs
                >
                    <Tab label="Daily"
                        style={{ fontSize: '10', backgroundColor: '#48C9B0' }}>
                        <div>
                            <Card style={{ margin: '.5em' }}>
                                <CardHeader
                                    title="05-April-2017"
                                    subtitle="Thursday"
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions>
                            </Card>
                            <Card style={{ margin: '.5em' }}>
                                <CardHeader
                                    title="Without Avatar"
                                    subtitle="Subtitle"
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions>
                            </Card>
                        </div>
                    </Tab>
                    <Tab label="Calender"
                        style={{ fontSize: '12', backgroundColor: '#48C9B0' }}>
                        <div>
                            <h2 style={styles.headline}>Tab Two</h2>
                            <p> This is another example tab.</p>
                        </div>
                    </Tab>
                    <Tab label="Weekly"
                        data-route="/Main"
                        onActive={this.handleActive}
                        style={{ fontSize: '10', backgroundColor: '#48C9B0' }}
                    ><div>
                            <h2 style={styles.headline}>Tab Three</h2>
                            <p>This is a third example tab. </p>
                        </div>
                    </Tab>
                    <Tab label="Monthly"
                        style={{ fontSize: '10', backgroundColor: '#48C9B0' }}>
                        <div>
                            <h2 style={styles.headline}>Tab Two</h2>
                            <p>This is another example tab.</p>
                        </div>
                    </Tab>
                    <Tab label="Total"
                        style={{ fontSize: '10', backgroundColor: '#48C9B0' }}>
                        <div>
                            <h2 style={styles.headline}>Tab Two</h2>
                            <p>This is another example tab.</p>
                        </div>
                    </Tab>
                </Tabs>
                <FloatingActionButton secondary={true} style={styles.buttonStyle}>
                    <ContentAdd />
                </FloatingActionButton>

                {this.props.children}
            </div>

        );
    }
}

export default Home;
