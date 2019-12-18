import { Card, CardContent } from '@material-ui/core'
import * as firebase from "firebase";
import * as React from 'react'
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

const Graph = () => {
    const date0 = new Date()
    const date1 = new Date()
    date1.setDate(date1.getDate() - 1);
    const date2 = new Date()
    date2.setDate(date2.getDate() - 2);
    const date3 = new Date()
    date3.setDate(date3.getDate() - 3);
    const date4 = new Date()
    date4.setDate(date4.getDate() - 4);
    const date5 = new Date()
    date5.setDate(date5.getDate() - 5);
    const date6 = new Date()
    date6.setDate(date6.getDate() - 6);

    const formatDate = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    const [datas, setDatas] = useState()

    useEffect(() => {
        const getData = async () => {
            const db = firebase.firestore()
            let data0 = 0
            let data1 = 0
            let data2 = 0
            let data3 = 0
            let data4 = 0
            let data5 = 0
            let data6 = 0

            await db.collection('data').doc(formatDate(date0))
                .get()
                .then(doc => {
                    const dd = doc.data()
                    if (dd !== undefined) {
                        data0 = dd.time
                    } else {
                        data0 = 0
                    }
                })

            await db.collection('data').doc(formatDate(date1))
                .get()
                .then(doc => {
                    const dd = doc.data()
                    if (dd !== undefined) {
                        data1 = dd.time
                    } else {
                        data1 = 0
                    }
                })

            await db.collection('data').doc(formatDate(date2))
                .get()
                .then(doc => {
                    const dd = doc.data()
                    if (dd !== undefined) {
                        data2 = dd.time
                    } else {
                        data2 = 0
                    }
                })

            await db.collection('data').doc(formatDate(date3))
                .get()
                .then(doc => {
                    const dd = doc.data()
                    if (dd !== undefined) {
                        data3 = dd.time
                    } else {
                        data3 = 0
                    }
                })

            await db.collection('data').doc(formatDate(date4))
                .get()
                .then(doc => {
                    const dd = doc.data()
                    if (dd !== undefined) {
                        data4 = dd.time
                    } else {
                        data4 = 0
                    }
                })

            await db.collection('data').doc(formatDate(date5))
                .get()
                .then(doc => {
                    const dd = doc.data()
                    if (dd !== undefined) {
                        data5 = dd.time
                    } else {
                        data5 = 0
                    }
                })

            await db.collection('data').doc(formatDate(date6))
                .get()
                .then(doc => {
                    const dd = doc.data()
                    if (dd !== undefined) {
                        data6 = dd.time
                    } else {
                        data6 = 0
                    }
                })

            const datasSub = [data6, data5, data4, data3, data2, data1, data0]
            setDatas(datasSub)
        }
        getData()
    }, [])

    const data = {
        labels: [formatDate(date6), formatDate(date5), formatDate(date4), formatDate(date3), formatDate(date2), formatDate(date1), formatDate(date0)],
        datasets: [
            {
                label: 'time(s)',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'round',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'square',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#eee',
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: datas
            }
        ]
    }

    return (
        <Card style={{ width: '85%' }}>
            <CardContent>
                <Line data={data} />
            </CardContent>
        </Card>

    )
}

export default Graph