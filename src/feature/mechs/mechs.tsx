import React from 'react';
import {
    Box,
    FormControl,
    FormGroup,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';

export const Mechs: React.FunctionComponent = () => {
    const mech1 = { id: 1, name: 'Warhammer', model: 'WHM-6R', weight: 70, class: 'Heavy' };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography sx={{ marginBottom: '15px' }} variant="h5">
                        Mechs List
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead sx={{ backgroundColor: 'lightgrey' }}>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Model</TableCell>
                                    <TableCell align="right">Weight (tons)</TableCell>
                                    <TableCell align="right">Class</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={mech1.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {mech1.id}
                                    </TableCell>
                                    <TableCell>{mech1.name}</TableCell>
                                    <TableCell align="right">{mech1.model}</TableCell>
                                    <TableCell align="right">{mech1.weight}</TableCell>
                                    <TableCell align="right">{mech1.class}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{ marginBottom: '15px' }} variant="h5">
                        Mech Details
                    </Typography>
                    <Paper sx={{ padding: '15px' }} variant="outlined">
                        <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <FormControl sx={{ width: '50%' }}>
                                <TextField
                                    id="id"
                                    label="ID"
                                    variant="outlined"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField id="name" label="Name" variant="outlined" />
                            </FormControl>
                            <FormControl sx={{ width: '50%' }}>
                                <TextField id="model" label="Model" variant="outlined" />
                            </FormControl>
                            <FormControl sx={{ width: '50%' }}>
                                <TextField
                                    id="weight"
                                    label="Weight"
                                    variant="outlined"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]' }}
                                />
                            </FormControl>
                            <FormControl sx={{ width: '50%' }}>
                                <TextField id="class" label="Class" variant="outlined" />
                            </FormControl>
                        </FormGroup>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};
