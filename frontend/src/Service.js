import React from 'react';
import MyNavbar from './MyNavbar';
import {Table } from 'react-bootstrap';
import './service.css';

function Service() {
    return (
        <div>
            <MyNavbar/>
            <br></br>
            <div class="layout">
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>ลำดับ</th>
                <th>รายการซ่อม</th>
                <th>แผนก</th>
                <th>สถานะ</th>
                <th>วันที่ซ่อม</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>เครื่องปริ้นเสีย</td>
                <td>บุคคล</td>
                <td>รอซ่อม</td>
                <td>-</td>
                </tr>
                <tr>
                <td>1</td>
                <td>คอมเปิดไม่ติด</td>
                <td>การเงิน</td>
                <td>เสร็จสิ้น</td>
                <td>23/03/2022</td>
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Service;