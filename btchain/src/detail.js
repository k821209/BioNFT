import React, { useState, useEffect} from "react";
import QRCode from "qrcode.react";
import * as KlipAPI from "./api/useKlip";
import { useLocation, useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { Segment, Divider, Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';

function Detail() {
    const location = useLocation();
    const myparam = location.state.data;
    console.log("[MYPARAM]",myparam)
    const [qrvalue, setQrvalue] = useState('default');
    const [NftShow, setNftShow] = useState(myparam.NFT)
    const [NFTed, setNFT] = useState({'tx_hash':'','status':false})
    const user_id = myparam.user_id;
    const user_url = `http://203.255.24.99:3035/Profile/?user=${user_id}`
    console.log("[USER_INFO]",user_url)
    const get_data = async () => {
        console.log('[getdata..]')
        const fileData = await axios.get(user_url)
        const { data : {results} } = fileData
        // console.log("[RESULTs]",results[0].KlaytnPrivateKey)
        const query_value = [results[0].KlaytnPrivateKey, myparam.auto_id, "ATGC", "good for you", myparam.md5sum]
        KlipAPI.setValue(query_value, setQrvalue, setNFT);
    }
    const updateNote = (auto_id,param) => {
        console.log("[PATCH]",`http://203.255.24.99:3035/BTRecords/${auto_id}/`,param)
        axios.patch(`http://203.255.24.99:3035/BTRecords/${auto_id}/`,param) // {'tx_hash':'1234'}
    }
    useEffect(() => {
        if (NftShow === false){
            get_data();
        } 
    },[]);

    useEffect(() => {
        if (NFTed.status === true){
            updateNote(myparam.auto_id,{'NFT':NFTed.status,'tx_hash':NFTed.tx_hash}) // , 
            setNftShow(true)
        } 
      },[NFTed]);

    
    
    
      

/// auto_id: 1
///date: "2021-05-28"
///desc: "test"
///filedata: "http://203.255.24.99:3035/uploads/2021/05/28/resveratrol-proteinAlignment_PWze3Nf.pdf"
///filesize: "299.97 kb"
///md5sum: "e7391e725a9814f993a09070f30bba0f"
///perma_id: "PDF00001"
///title: "test"
///user_id: 1
///username: "k821209"
///
    return (
        <Segment>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='tag' />
                    Submitter information
                </Header>
            </Divider>
            <List bulleted>
                <List.Item>[DATE] {myparam.date}</List.Item>
                <List.Item>[ID] {myparam.perma_id}</List.Item>
                <List.Item>[NAME] {myparam.username}</List.Item>
            </List>           
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='tag' />
                    Title
                </Header>
            </Divider>
            {myparam.title}
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='tag' />
                    Description
                </Header>
            </Divider>
            {myparam.desc}
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name='tag' />
                    NFT
                </Header>
            </Divider>
            {console.log("[NFT]", NFTed)}
            {(NftShow === true) ?
                <>
                    <List bulleted>
                        <List.Item>tx_hash : {myparam.tx_hash}</List.Item>
                        <List.Item><a href={`https://scope.klaytn.com/tx/${myparam.tx_hash}?tabId=internalTx`} target="_blank">tx_link</a></List.Item>
                    </List>
                    
                     
                     
                </>
                :
                <>
                    <Header>
                        This post is not NFT yet. Klaytn cypress registration by QR code
                    </Header>
                    <List bulleted>
                        <List.Item>To register NFT to Klaytn, please take a picture of following QR code</List.Item>
                        <List.Item>Only private key registered user can register. Submitter of this post is {myparam.username}</List.Item>
                    </List>
                    <QRCode value={qrvalue} />
                </>
            }

        </Segment>
    );
}

export default Detail;