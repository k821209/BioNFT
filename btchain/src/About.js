import React from 'react';
import { Segment, List } from 'semantic-ui-react';


function About() {
    return (
        <>
            <Segment>
                <h4>현재 구현 기능 목록</h4>
                <List bulleted>
                    <List.Item>관리자 모드 : 데이터 업로드를 통한 알카이빙</List.Item>
                    <List.Item>관리자 모드 : 업로드된 데이터 자동 처리를 통한 DB화
                        <List.List>
                            <List.Item>파일 Hash 자동 등록</List.Item>
                            <List.Item>NFT QR 화면 전송</List.Item>
                        </List.List>
                    </List.Item>
                </List>
            </Segment>
            <Segment>
                <List bulleted>
                    <List.Item><a>과제명 :</a> 생명정보 NFT 플랫폼 제작</List.Item>
                    <List.Item><a>과제기간 :</a> 2021/05 ~ 2021/7 </List.Item>
                    <List.Item><a>DB 플랫폼 API 개발 :</a> 50% </List.Item>
                    <List.Item><a>DB 플랫폼 UI 개발 :</a> 50% </List.Item>
                    <List.Item><a>용역 수행 :</a> 강양제 학습중 </List.Item>


                </List>
            </Segment>
        </>
    );
}

export default About;