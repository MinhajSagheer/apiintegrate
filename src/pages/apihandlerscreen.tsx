import { Box, CircularProgress, Button } from '@mui/material';
import React, { useState } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import axios from 'axios';
import BAGrid from '../components/BAGrid';


export default function ApiHandlerScreen() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);

    const getApiData = () => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res, "Success Response")
                setData([...res.data]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    return (
        <Box>
            <h1>ApiHandlerScreen</h1>
            <Button variant="contained" onClick={getApiData} disabled={loading}><PublicIcon />Get Api</Button>

            <BAGrid

                gridCols={[
                    {
                        key: 'name',
                        label: 'User Name'
                    },
                    {
                        key: 'email',
                        label: 'User Email'
                    },
                    {
                        key: 'phone',
                        label: 'Phone'
                    },
                    {
                        key: 'website',
                        label: 'Web URL'
                    },
                    // {
                    //     key: '',
                    //     label: 'Delete',
                    //     displayField: (row: any) => <Button onClick={() => {
                    //         console.log(row)
                    //     }} variant="contained">Delete</Button>
                    // },
                ]} datasource={data} />

            {loading && <CircularProgress style={{ marginTop: 20 }} />}

        </Box>
    );
}

