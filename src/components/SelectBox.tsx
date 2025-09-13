import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectBox({ users, selectedUser, setSelectedUser }: any) {



    return (
        <Box className="mb-3" sx={{ maxWidth: "400px" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Users</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedUser}
                    label="Users"
                    onChange={(e) => setSelectedUser(e.target.value)}
                >
                    {
                        users.map((user: any) => (
                            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </Box >
    )
}

export default SelectBox