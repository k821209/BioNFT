import React, { useEffect, useState } from 'react';
import { Table, Label, Icon, Menu, Pagination } from 'semantic-ui-react';
import axios from 'axios';
import {Link} from "react-router-dom";

function NFT() {
    const [isLoading, setLoad] = useState(true);
    const [data, setData] = useState({ "results": [] })
    const firstPage = 'http://203.255.24.99:3035/BTRecords/'
    const [url_file, setURL] = useState(firstPage);
    const [activePage, setPage] = useState(1);


    const get_data = async () => {
        const fileData = await axios.get(url_file)
        const { data } = fileData
        setLoad(false)
        setData(data)
    }
    const onChange = (e, page) => {
        setPage(page.activePage);
        setURL(firstPage + '?page=' + page.activePage.toString());
    }
    useEffect(() => {
        get_data() // 화면이 열리면 실행됨 
    }, [activePage])

    return (
        <>
            {isLoading ?
                <h1>Loading..</h1>
                :
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>User</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>FileID</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>FileName</Table.HeaderCell>
                            <Table.HeaderCell>FileSize</Table.HeaderCell>
                            <Table.HeaderCell>md5sum</Table.HeaderCell>
                            <Table.HeaderCell>Link</Table.HeaderCell>
                            <Table.HeaderCell>NFT</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {data["results"].map((value) => {
                            return (
                                <Table.Row key={value.auto_id}>
                                    <Table.Cell>{value.username}</Table.Cell>
                                    <Table.Cell>{value.date}</Table.Cell>
                                    <Table.Cell>{value.perma_id}</Table.Cell>
                                    <Table.Cell><Link to={{
                                        pathname: "/Detail",
                                        state: { data: value }
                                    }}>{value.title}</Link></Table.Cell>
                                    <Table.Cell>{decodeURI(value.filedata.split('/').pop())}</Table.Cell>
                                    <Table.Cell>{value.filesize}</Table.Cell>
                                    <Table.Cell>{value.md5sum}</Table.Cell>
                                    <Table.Cell><a href={value.filedata}><Icon name="download" /></a></Table.Cell>
                                    <Table.Cell>{(value.NFT) ? 'yes' : 'no' }</Table.Cell>
                                </Table.Row>)
                        })}
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center' colSpan='9'>
                                <Pagination
                                    activePage={activePage}
                                    onPageChange={onChange}
                                    totalPages={data.count / 5}
                                    ellipsisItem={null}
                                    firstItem={null}
                                    lastItem={null}
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            }
        </>
    );
}

export default NFT;