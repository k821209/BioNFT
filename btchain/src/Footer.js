import React from 'react';
import { Segment, Divider, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <Segment>
                <List>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>
                            Developed by (주)DEEVO, <Link to='/Admin/' target="_blank">[AdminPage]</Link>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:kangyangjae@gnu.ac.kr'>kangyangjae@gnu.ac.kr</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>(우)52828 경상남도 진주시 진주대로 501 경상대학교, All rights reserved.</List.Content>
                    </List.Item>

                </List>


            </Segment>
        </>
    );
}

export default Footer;