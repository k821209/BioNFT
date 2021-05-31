import React from 'react';
import { Segment, Divider, Icon, List, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

function Title() {
    return (
        <>
            <Segment>
                <Divider />
                <Header size='huge' as={Link} to='/'><Icon name="object group outline" />BioTech NFT DB</Header>
                <List bulleted>
                    <List.Item>Optimized on Google Chrome</List.Item>
                </List>
                <Divider />
            </Segment>
        </>
    );
}

export default Title;